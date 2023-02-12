/* eslint-disable react/jsx-no-undef */
import React from "react";
import { useState } from "react";
import { expand_more, beziLogo, hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <header className="w-full h-[60px] bg-custom-green-500 md:sticky md:top-0 md:z-20 ">
      <div className="md:max-w-[1480px] max-w-[600px] md:px-[108px] px-4  m-auto w-full h-full flex justify-between items-center">
        <img src={beziLogo} className="h-[58px] items-center" alt="Bezi logo" />

        <div className="hidden md:flex items-center ">
          <ul className="flex flex-row items-center gap-[24px] text-white">
            <li className="flex gap-2 cursor-pointer items-center">
              <h3>About Us</h3>
              <img src={expand_more} alt="expand_more button" />
            </li>
            <li className="flex gap-2 cursor-pointer items-center">
              <h3>Porfolio</h3>
              <img src={expand_more} alt="expand_more button" />
            </li>
            <li className="flex gap-2 cursor-pointer items-center">
              <h3>Resources</h3>
              <img src={expand_more} alt="expand_more button" />
            </li>
            <li className="flex gap-2 cursor-pointer items-center">
              <h3>Community</h3>
              <img src={expand_more} alt="expand_more button" />
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="px-8 py-3 rounded-md bg-[#006774] text-white font-bold">
            Join Bezi
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img
            src={toggle ? close : hamburgerMenu}
            className="color-[#006774]"
            alt=""
          />
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-custom-green-500 w-full px-8 md:hidden "
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer">About Us</li>
          <li className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer">Porfolio</li>
          <li className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer">Resources</li>
          <li className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer">Resources</li>
          <li className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer">Community</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="px-8 py-5 rounded-md bg-[#006774] text-white font-bold">
              Join Bezi
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
