/* eslint-disable react/jsx-no-undef */
import React from "react";
import { useState } from "react";
import { expand_more, beziLogo, hamburgerMenu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClose = () => setToggle(!toggle);
  const handleClick = () => setToggle(!toggle);
  return (
    <header className="w-full h-[60px] bg-custom-green-500 md:sticky md:top-0 md:z-20 ">
      <div className="md:max-w-[1480px] max-w-[600px] md:px-[108px] px-4  m-auto w-full h-full flex justify-between items-center">
        <img src={beziLogo} className="h-[58px] items-center" alt="Bezi logo" />

        <div className="hidden md:flex items-center ">
          <ul className="flex flex-row items-center gap-[24px] text-white">
            <li>
              <Link className="flex gap-2 cursor-pointer items-center" to="/">
                <h3>Home</h3>
                <img src={expand_more} alt="expand_more button" />
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 cursor-pointer items-center"
                to="/aboutUs"
              >
                <h3>About Us</h3>
                <img src={expand_more} alt="expand_more button" />
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 cursor-pointer items-center"
                to="/portfolio"
              >
                <h3>Porfolio</h3>
                <img src={expand_more} alt="expand_more button" />
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 cursor-pointer items-center"
                to="/resource"
              >
                <h3>Resources</h3>
                <img src={expand_more} alt="expand_more button" />
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 cursor-pointer items-center"
                to="/community"
              >
                <h3>Community</h3>
                <img src={expand_more} alt="expand_more button" />
              </Link>
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
          <Link to="/">
            {" "}
            <li
              onClick={handleClose}
              className="p-4 hover:bg-[#006774]  hover:rounded-lg hover:text-white cursor-pointer"
            >
              Home
            </li>
          </Link>
          <Link to="/aboutUs">
            <li
              onClick={handleClose}
              className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer"
            >
              About Us
            </li>
          </Link>
          <Link to="/portfolio">
            {" "}
            <li
              onClick={handleClose}
              className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer"
            >
              Porfolio
            </li>
          </Link>
          <Link to="/resource">
            {" "}
            <li
              onClick={handleClose}
              className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer"
            >
              Resources
            </li>
          </Link>
          <Link to="/community">
            <li
              onClick={handleClose}
              className="p-4 hover:bg-[#006774] hover:rounded-lg hover:text-white cursor-pointer"
            >
              Community
            </li>
          </Link>
          <div className="flex flex-col my-4 gap-4">
            <button
              onClick={handleClose}
              className="px-8 py-5 rounded-md bg-[#006774] text-white font-bold"
            >
              Join Bezi
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
