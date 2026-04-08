import React from "react";
import LogoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="max-w-[1320px] mx-auto w-full flex justify-between items-center px-4">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
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
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <MyNavLink to={"/"}>Home</MyNavLink>
              </li>
              <li>
                <MyNavLink to={"/apps"}>Apps</MyNavLink>
              </li>
              <li>
                <MyNavLink to={"/installations"}>Installations</MyNavLink>
              </li>
              <li>
                <MyNavLink to={"/dashboard"}>Dashboard</MyNavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <img src={LogoImg} alt="logo" className="h-10" />
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex gap-7 font-medium">
          <MyNavLink to={"/"}>Home</MyNavLink>
          <MyNavLink to={"/apps"}>Apps</MyNavLink>
          <MyNavLink to={"/installations"}>Installations</MyNavLink>
          <MyNavLink to={"/dashboard"}>Dashboard</MyNavLink>
        </div>

        {/* Right: Button */}
        <div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded">
            <FaGithub />
            <span className="hidden sm:inline">Contribute</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
