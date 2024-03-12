// import React from "react";
import {FaCartArrowDown,} from "react-icons/fa";
  import { MdAccountCircle } from "react-icons/md";
  import { CiDiscount1 } from "react-icons/ci";
  
  const Navbar = () => {
    return (
      <div>
  
        <div
          className={"navbar z-50 fixed bg-[#1a1a1a] top-0  w-full text-slate-300"
          }  
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
        
      </div>
    );
  };
  
  export default Navbar;
  