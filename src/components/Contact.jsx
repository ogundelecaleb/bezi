import React from "react";
import { envelope } from "../assets";

const Contact = () => {
  return (
    <div className="bg-[#231F20] md:px-[108px] px-4  py-[30px] mx-auto">
      <div className="bg-custom-grey-500 flex flex-col justify-center items-center  py-[60px] px-[40px]">
        <img src={envelope} alt="" className="mb-[12px]"/>
        <h3 className="text-white font-bold">Keep in touch </h3>
        <p className="text-[#918F8F] max-w-[420px] text-center text-xs mb-3">
          Sign up for our newsletter and be up-to-date with our latest programs,
          opportunities, and events.
        </p>
        <div className="flex flex-row gap-4 items-center">
          <input type="text" placeholder="youremail@yahoo.com" className="placeholder:text-sm rounded-xl px-3 py-1 border border-[#918F8F] bg-transparent max-w-[420px] "/>
          <button className="px-[2] md:px-3 py-1 rounded-md bg-[#006774] text-white text-xs md:text-sm">Sign Me Up</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
