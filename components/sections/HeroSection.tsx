import React from "react";

export default function HeroSection() {
  let data = [{}, {}, {}, {}, {}];
  return (
    <section className="text-white body-font">
      <div className="flex px-5 py-52 items-center justify-center flex-col bg-cover  hero-bg">
        <div className="text-center lg:w-2/3 w-full ">
          <h1 className="title-font sm:text-4xl md:text-7xl mb-4 font-semibold text-white">
            Indian Association of Behavioural Healthcare
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </section>

    // <section className=" bg-grey-10 flex flex-col items-center justify-center py-56">
    //   <div className=" gap-12 container flex flex-col items-center">
    //     <div>
    //       <h1 className="text-5xl font-bold">Member Showcase</h1>
    //     </div>
    //     <ul className="grid grid-cols-5 gap-8">
    //       {data.map((value, index) => {
    //         return (
    //           <li key={index}>
    //             <div className="rounded-lg bg-grey-20 overflow-hidden">
    //               <div className="h-32"></div>
    //               <div className="bg-white p-4 pr-8">
    //                 <h3 className="text-base font-bold ">Lorem ipsum</h3>
    //                 <p className="text-xs">
    //                   Lorem ipsum dolor sit amet consectetur. Consectetur
    //                   molestie cras et.
    //                 </p>
    //               </div>
    //             </div>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </section>
  );
}
