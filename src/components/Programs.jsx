/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { calendar, programimage, location } from "../assets";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const Programs = () => {
  const { ref, inView } = useInView( {threshold: 0.1});
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="md:px-[108px] px-4  my-[30px] mx-auto">
      <h3 className="text-[36px] text-[#006774] font-bold">Our Programs</h3>
      <motion.div
        animate={animation}
        
        className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-3 justify-center items-center "
      >
        <div className="border border-black border-bg-transparent max-w-[420px] h-[360px] md:h-[420px] rounded-[16px] md:px-[75px] px-[50px] md:pt-[100px]  pt-[60px] ">
          <h4 className="text-[25px] md:text-[25px] text-[#006774] md:text-[#006774] font-bold">
            Bezi Fellowship program
          </h4>
          <p className=" md:pt-[38px] text-xs">
            Bezi serves as a dedicated platform with all the resources needed
            for founders to broaden their knowledge, be mentored by established
            global founders, and grow as a part of an engaging community.
          </p>
          <div className="flex justify-between items-center pt-[68px]">
            <div className="flex items-center flex-row gap-1">
              <img src={calendar} alt="" />
              <p className="text-xs">13th February, 2023</p>
            </div>
            <div className="flex items-center flex-row gap-1">
              <img src={location} alt="" />
              <p className="text-xs">Lekki, NG</p>
            </div>
          </div>
        </div>

        <img src={programimage} alt="" className="h-[360px] md:h-[420px]" />

        <div className="border border-black border-bg-[#006774] bg-[#006774] max-w-[420px] h-[360px] md:h-[420px] rounded-[10px] md:px-[75px] px-[50px] md:pt-[100px]  pt-[60px] ">
          <h4 className="text-[25px] md:text-[25px] text-white font-bold">
            Bezi Fellowship program
          </h4>
          <p className=" md:pt-[38px] text-xs">
            Bezi serves as a dedicated platform with all the resources needed
            for founders to broaden their knowledge, be mentored by established
            global founders, and grow as a part of an engaging community.
          </p>
          <div className="flex justify-between items-center pt-[68px]">
            <div className="flex items-center flex-row gap-1">
              <img src={calendar} alt="" />
              <p className="text-xs">13th February, 2023</p>
            </div>
            <div className="flex items-center flex-row gap-1">
              <img src={location} alt="" />
              <p className="text-xs">Lekki, NG</p>
            </div>
          </div>
        </div>
        <div className="border border-black border-bg-transparent max-w-[420px] h-[360px] md:h-[420px] rounded-[10px] md:px-[75px] px-[50px] md:pt-[100px]  pt-[60px] ">
          <h4 className="text-[25px] md:text-[25px] text-[#006774]  md:text-[#006774] font-bold">
            Bezi Fellowship program
          </h4>
          <p className=" md:pt-[38px] text-xs">
            Bezi serves as a dedicated platform with all the resources needed
            for founders to broaden their knowledge, be mentored by established
            global founders, and grow as a part of an engaging community.
          </p>
          <div className="flex justify-between items-center pt-[68px]">
            <div className="flex items-center flex-row gap-1">
              <img src={calendar} alt="" />
              <p className="text-xs">13th February, 2023</p>
            </div>
            <div className="flex items-center flex-row gap-1">
              <img src={location} alt="" />
              <p className="text-xs">Lekki, NG</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Programs;
