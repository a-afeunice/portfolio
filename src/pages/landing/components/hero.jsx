import React from "react";
import { pic } from "../../../assets";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20 ">
      <div className=" mt-20 flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2">
          <div id="home" className="flex flex-col items-center lg:items-center">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-left">
              Eunice Afrifa
            </h1>
            <span className="bg-gradient-to-r from-blue-400 via-slate-400 to-blue-600 bg-clip-text text-4xl tracking-tight text-transparent text-left pr-32">
              Frontend Developer
            </span>
            <p className="text-left pl-32 mt-4">
            A dedicated frontend developer with a passion for creating visually engaging and user-friendly web experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={pic}
              alt=""
              className="w-1/2 rounded-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
