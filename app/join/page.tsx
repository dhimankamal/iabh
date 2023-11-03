"use client";

import Header from "@/components/ui/Header";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

type Inputs = {
  name: string;
  comaddress: string;
  acabackground: string;
  curaffliations: string;
  area: string;
  email: string;
  phone: string;
};

export default function JoinPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true);
    try {
      const res = await axios.post("/api/contact", data);

      if (res.status == 200) {
        toast(
          `We have received your joining form.`,
          {
            type: "success",
            position: "bottom-center",
          }
        );
        reset();
      } else {
        toast(`Error please try again`, {
          type: "error",
          position: "bottom-center",
        });
      }
    } catch (error) {
      toast(`Error please try again`, {
        type: "error",
        position: "bottom-center",
      });
    }
    setLoading(false);
  };
  return (
    <section className="container mx-auto space-y-4">
      <Header title="Membership Joining form" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container mx-auto flex"
      >
        <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Communication Address
            </label>
            <input
              type="text"
              id="comaddress"
              {...register("comaddress")}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Academic Background
            </label>
            <input
              type="text"
              id="acabackground"
              {...register("acabackground")}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Current Affliations
            </label>
            <input
              type="text"
              id="curaffliations"
              {...register("curaffliations")}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Area of interests/Expertise
            </label>
            <input
              type="text"
              id="area"
              {...register("area")}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              {...register("phone")}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="eamil"
              id="email"
              {...register("email")}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
            {loading ? "Loading..." : "Join now"}
          </button>
        </div>
      </form>
    </section>
  );
}
