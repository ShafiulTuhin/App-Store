import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white">
      {/* Top Row */}
      <div className="max-w-[1320px] mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo */}
        <img src={FooterImg} alt="" />

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-[1320px] mx-auto text-center py-4 border-t border-gray-600 text-sm">
        Copyright © 2025 - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
