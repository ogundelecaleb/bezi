/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { beziLogo2, twitter, instagram, linkedin } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#231F20] md:px-[108px] px-4  py-[20px] mx-auto flex flex-col gap-3 md:gap-5 md:flex-row text-white text-sm">
      <div className="max-w-[200px]">
        <img src={beziLogo2} alt="" className="mb-3"/>
        <p className="pb-3 text-xs">Powering African startups and founders for maximum impact. </p>
        <div className="flex flex-row gap-3 items-center">
          <img src={linkedin} alt="" className="h-4"/>
          <img src={twitter} alt="" className="h-4"/>
          <img src={instagram} alt="" className="h-4"/>
        </div>
      </div>
      <div>
        <h4 className="pb-3">Bezi</h4>
        <ul className="text-xs text-[#918F8F] cursor-pointer">
          <li className="pb-2">
            <a href="#">Our Companies</a>{" "}
          </li>
          <li className="pb-2">
            <a href="#">Our Founders</a>{" "}
          </li>
          <li className="pb-2">
            <a href="#">Who We are</a>{" "}
          </li>
          <li className="pb-2">
            <a href="#">Our Products</a>{" "}
          </li>
        </ul>
      </div>
      <div>
        <h4 className="pb-3">Community</h4>
        <ul className="text-xs text-[#918F8F] cursor-pointer">
          <li className="pb-2"><a href="#">Blog</a></li>
          <li className="pb-2"><a href="#">Programs</a></li>
          <li className="pb-2"><a href="#">Virtual Events</a></li>
          <li className="pb-2"><a href="#">Forum</a></li>
          
        </ul>
      </div>
      <div>
        <h4 className="pb-3">Contact Us</h4>
        <ul className="text-xs text-[#918F8F]">
          <li className="pb-2">info@Bezi.com</li>
          <li className="pb-2">1-800-200-300</li>
          <li className="pb-2">20 Lekki, 11th Floor Lagos, NG 11010</li>
          
        </ul>
      </div>
      <p className="text-xs text-[#918F8F] text-center">© Copyright Bezi 2023.</p>
    </div>
  );
};

export default Footer;
