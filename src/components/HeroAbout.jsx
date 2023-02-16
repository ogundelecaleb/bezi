import React from "react";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <div className=" bg-hero bg-custom-green-500 relative   bg-center bg-cover bg-no-repeat pb-[120px]">
      {/* <img src={largeLogo} alt="" className="absolute top-0"/> */}
      <div>
        <motion.div
          className="md:px-[108px] px-4 md:w-[850px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-6xl  text-white text-left font-semibold pt-[120px] md:mb-[24px] mb-[16px]">
          Empowering World Class African Startups. 
          </h2>
          <p className="py-2 text-[16px] md:text-2xl md:max-w-[580px] text-white text-left md:mb-[65px] mb-[35px] ">
            Our mission is to impact the African ecosystem, empowering one
            entrepreneur at a time, helping them to achieve their goals, and to
            build thriving businesses that contribute to the economic
            development of Africa.
          </p>
         
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAbout;
