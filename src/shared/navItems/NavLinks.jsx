import React from "react";
import { NavLink } from "react-router";

const NavLinks = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-3xl transition-all duration-300 ${isActive ? "bg-primary" : ""} hover:bg-primary`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinks;
