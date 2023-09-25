import React from "react";

export default function CounterSection() {
  return (
    <section className="container text-white body-font bg-blue-500 mx-auto -mt-20">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white0">
              1000+
            </h2>
            <p className="leading-relaxed">IABH Members</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              15+
            </h2>
            <p className="leading-relaxed">Countries Represented</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              HUNDREDS OF
            </h2>
            <p className="leading-relaxed">Library Resources</p>
          </div>
        </div>
      </div>
    </section>
  );
}
