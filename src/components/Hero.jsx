import React from "react";
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div className=" bg-hero bg-custom-green-500 relative   bg-center bg-cover bg-no-repeat pb-[120px]">
      {/* <img src={largeLogo} alt="" className="absolute top-0"/> */}
      <div>
      <motion.div className="md:px-[108px] px-4 md:w-[850px]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-6xl  text-white text-left font-semibold pt-[120px] md:mb-[24px] mb-[16px]">Powering World-Class African Startups</h2>
        <p className="py-2 text-[16px] md:text-2xl md:max-w-[580px] text-white text-left md:mb-[65px] mb-[35px] ">
          At Bezi we empower high-potential Africans in their journey to build
          world class companies.
        </p>
        <motion.div
        initial = {{
            x: -500,
            opacity: 0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition = {{
            duration: 1.5,
        }}
        
        className="flex flex-row gap-[48px] ">
      <button className='px-7 py-3 rounded-lg bg-[#006774] text-white font-bold text-[20px]'>Join Bezi</button>
      <button className='px-7 py-3 rounded-lg border border-[#006774] bg-transparent text-[#006774] font-bold'>Learn More</button>
      </motion.div>
      </motion.div>
      
      </div>
      
    </div>
  );
};

export default Hero;
