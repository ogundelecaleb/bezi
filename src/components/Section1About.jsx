import React from "react";
import { Artboard, ladyImage } from "../assets";

const Section1About = () => {
  return (
    <div className=" px-4  mb-[40px] md-[80px] md:w-[850px] md:py-[50px] mx-auto  items-center gap-4 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-[25px] md:text-[25px] text-[#006774] md:text-[#006774] font-bold">
            Access to any & every Resource
          </h3>
          <p>
            Imagine a world where there is abundance, one where businesses
            thrive, and dreams are not limited due to factors such as; lack of
            funds, little or no entrepreneur-focused communities, zero access to
            mentors, and poor knowledge of the market. 
          </p>
        </div>
        <div className="relative">
          <img
            className="h-[290px] w-[150px] absolute md:h-[352px] md:w-[200px] top-0 right-0 -z-10 "
            src={Artboard}
            alt=""
          />
          <img
            className="h-[360px] md:h-[420px] md:max-w-[420px] pt-6 pr-6 md:pt-9 md:pr-9"
            src={ladyImage}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="relative">
          <img
            className="h-[290px] w-[150px] absolute md:h-[352px] md:w-[200px] top-0 left-0 -z-10 "
            src={Artboard}
            alt=""
          />
          <img
            className="h-[360px] md:h-[420px] md:max-w-[420px] pt-6 pr-6 md:pt-9 md:pl-9"
            src={ladyImage}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-[25px] md:text-[25px] text-[#006774] md:text-[#006774] font-bold">
            Access to any & every Resource
          </h3>
          <p>
            We strive to be the fertile ground that helps businesses thrive,
            entrepreneurs flourish, and founders dream and create. <br /><br /> One where
            Africa can be a birthing ground for businesses, where founders can
            see their ideas come to life, and their dreams not threatened.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1About;
