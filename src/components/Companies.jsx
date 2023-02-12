import React from "react";
import {
  Logos_Canva,
  Logos_Innovaccer,
  Logos_Mejuri,
  Logos_Olist,
  credit_karma,
} from "../assets";

const Companies = () => {
  return (
    <div className="md:px-[108px] px-4 my-[25px] md:my-[30px] mx-auto">
      <p className=" p-2 text-[#006774] text-center">
        Supports over <span className="text-custom-green-500">50+</span>{" "}
        founders{" "}
      </p>

      <div className="mt-[24px] md:mt-[36px] flex flex-row flex-wrap  gap-3  items-center justify-center md:gap-4">
        <img src={credit_karma} alt=""  className="h-[15px] md:h-[30px]" />
        <img src={Logos_Canva} alt="" className="h-[15px] md:h-[30px]" />
        <img src={Logos_Innovaccer} alt=""  className="h-[15px] md:h-[30px]" />
        <img src={Logos_Mejuri} alt="" className="h-[15px] md:h-[30px]" />
        <img src={Logos_Olist} alt="" className="h-[15px] md:h-[30px]" />
        
      </div>
    </div>
  );
};

export default Companies;
