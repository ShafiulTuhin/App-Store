import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-purple-500 font-bold border-b border-bottom-500" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
