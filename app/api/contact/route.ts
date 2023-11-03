import { NextResponse } from "next/server";
import { Transporter } from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
const nodemailer = require("nodemailer");

export async function POST(request: Request) {
  let error: Error | undefined = undefined;

  try {
    const { name, email, message } = await request.json();
    const transporter: Transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.hostinger.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      secure: true,
    });

    const mailData: MailOptions = {
      from: "no-reply@iabh.in",
      to: "contact@iabh.in",
      subject: `Message From ${name}`,
      text: message,
      html:
        "Name - " +
        name +
        "<br /> email - " +
        email +
        "<br /> message - " +
        message,
    };
    transporter.sendMail(mailData, (err, info) => {
        console.log("infoerr", err)
      if (err) {
        error = err;
      } else {
        const mailOptions: MailOptions = {
          from: "iabh<no-reply@iabh.in>",
          to: email,
          subject: `Contact iabh`,
          text: "Contact iabh",
          html: `<b> Thanks for being awesome! </b><br />
                We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. <br />
            Otherwise, we will reply by email as soon as possible.<br /> <br />
            Talk to you soon, iabh <br />
            `,
        };
        transporter.sendMail(mailOptions, (err, info) => {
            console.log("info", info)
          if (err) {
            error = err;
          } else {
            return NextResponse.json({ status: "success", info });
          }
        });
      }
    });
  } catch (err) {
    error = err as Error;
  }

  console.log("error", error)

  if (error) {
    return NextResponse.json({ status: "error", error });
  } else {
    return NextResponse.json({ status: "success" });
  }
}
