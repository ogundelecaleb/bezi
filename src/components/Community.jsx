/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ladyImage } from "../assets";

const Community = () => {
  return (
    <div className="bg-[#231F20] md:px-[108px] px-4  py-[30px] mx-auto">
        <div className="bg-custom-grey-500 flex md:flex-row  flex-col items-center gap-[80px] py-[60px] px-[40px]">
        <div className=" text-white">
        <h3 className="text-[24px]  md:[36px] font-Space-Grotesk font-bold pb-4">Come for the resources, stay for the community</h3>
        <h4 className="text-xs mb-[30px]">
          With Bezi, you’ll never be alone. Join thousands of passionate
          founders and Growth Managers on our community forums, and contribute
          to Bezi’s rich ecosystem.
        </h4>
        <a href="#" className="underline">Join Our Community</a> 
      </div>
      <div className="text-white">
        <div className="flex gap-2 pb-[12px]">
          <img src={ladyImage} alt="" className="rounded-full h-[80px]"/>
          <img src={ladyImage} alt="" className="rounded-full h-[80px]"/>
          <img src={ladyImage} alt="" className="rounded-full h-[80px]"/>
        </div>
        <p className="text-xs">
          Bezi’s own dedicated mentors and growth facilitators are on the forum
          24 hours a day, 6 days a week.
        </p>
      </div>
      
        </div>
      
    </div>
  );
};

export default Community;
