// import React from "react";
import {
    FaFacebook,
    FaYoutube,
    FaInstagramSquare,
    FaCartArrowDown,
  } from "react-icons/fa";
  import { MdAccountCircle } from "react-icons/md";
  import { FaSquareXTwitter } from "react-icons/fa6";
  import { CiDiscount1 } from "react-icons/ci";
  import { useEffect, useState } from "react";
  
  const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // Stricky Navbar
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <div>
        
  
        <div
          className={`${
            isScrolled
              ? "fixed bg-slate-900/80 top-0  w-full text-slate-300"
              : " text-white bg-black opacity-80 w-11/12 m-auto"
          }  navbar z-10`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end text-3xl">
            <FaCartArrowDown />
            <MdAccountCircle className="mx-6" />
            <CiDiscount1 />
          </div>
        </div>
        <div className="w-11/12 m-auto  flex items-center justify-between  p-4">
          <p className="text-sm">Welcome to our online store...</p>
          <ul className="flex">
            <li className="mr-6">
              <FaFacebook />
            </li>
            <li className="mr-6">
              <FaSquareXTwitter />
            </li>
            <li className="mr-6">
              <FaInstagramSquare />
            </li>
            <li className="">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  