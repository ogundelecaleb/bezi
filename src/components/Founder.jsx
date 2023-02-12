import React from "react";
import { ladyImage, Ellipse, backward_arrow, forward_arrow } from "../assets";
import {motion} from "framer-motion"

const Founder = () => {
    
  return (
    <div
     className=" px-4  mb-[40px] md-[80px] md:w-[850px] md:py-[50px] mx-auto flex flex-col md:flex-row items-center gap-4 ">
      <div>
        <motion.img
        initial = {{
            x: -200,
            opacity: 0,
            scale:0.5,
        }}
        transition = {{
            duration: 1.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        viewport = {{
            once: true
        }}
         src={ladyImage} alt="" className="md:h-[563px] md:max-w-[420px]" />
      </div>
      <div
      
       className=" bg-[#231F20] px-[30px] py-[30px] md:px-[22px] rounded-[16px] md:max-h-[564px] md:max-w-[420px]">
        <p className="px-16px pt-3 border-b pb-2 text-[16px] md:text-[22px] text-white ">
          I joined Bezi as a fellow and it was a game changer for my company
          Pivo. The resources and support provided helped me scale and raise
          capital effectively. I highly recommend the program to any African
          entrepreneur looking to take their business to the next level.
        </p>
        <div className="flex flex-row flex-wrap my-3 items-center gap-3">
          <img src={Ellipse} alt="" className="md:h-[74px] h-[37px] " />
          <div>
            <p className="text-white">Nkiru from Pivo</p>
            <p className="text-[#918F8F]">Co-founder at CoolMan inc.</p>
          </div>
        </div>
        <div className="flex flex-row justify-end gap-2">
          <img src={forward_arrow} alt="" className="md:h-[48px] h-[24px]"/>
          <img src={backward_arrow} alt="" className="md:h-[48px] h-[24px]"/>
        </div>
      </div>
    </div>
  );
};

export default Founder;
