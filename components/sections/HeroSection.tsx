import React from "react";

export default function HeroSection() {
  let data = [{}, {}, {}, {}, {}];
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
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
