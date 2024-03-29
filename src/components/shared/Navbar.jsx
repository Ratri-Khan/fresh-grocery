// import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import useCart from "../../Hooks/UseCart";

const Navbar = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar z-50 fixed bg-[#1a1a1a] top-0  w-full text-slate-300">
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
        <a className="btn btn-ghost text-xl">Fresh Grocery</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/order/vegetable">Order</Link>
          </li>
          <li>
            <button className="bg-red-400">
              <Link to="/dashboard/myCart">
                <AiOutlineShoppingCart className="w-8 h-8" />
              </Link>
              <p>{cart?.length || +0}</p>
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            onClick={handleLogout}
            className="mx-6 flex flex-col  justify-center items-center cursor-pointer"
          >
            <img
              src={user.photoURL}
              alt=""
              className="h-[60px] w-[60px] border border-white rounded-full"
            />
            <p className="text-xs"> logout</p>
          </div>
        ) : (
          <Link to="/login">
            <div className="mx-6 flex flex-col  justify-center items-center">
              <MdAccountCircle className="text-3xl" />
              <p className="text-xs"> Account</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
