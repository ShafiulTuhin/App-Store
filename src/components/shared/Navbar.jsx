import React from "react";
import LogoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between items-center max-w-[1320px] mx-auto py-5 ">
        <img src={LogoImg} alt="" />
        <div className="flex gap-7 font-medium">
          <MyNavLink to={"/"}>Home</MyNavLink>
          <MyNavLink to={"/apps"}>Apps</MyNavLink>
          <MyNavLink to={"/installations"}>Installations</MyNavLink>
        </div>

        <button className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
          <FaGithub></FaGithub>
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
