import React from "react";
import { Link } from "react-router";
import Logo from "../../components/logo/Logo";
import Container from "../../components/container/Container";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "../button/Button";
import ThemeSwitcher from "../../components/themeSwitcher/ThemeSwitcher";
import NavLinks from "../navItems/NavLinks";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLinks to="/services">Services</NavLinks>
      </li>
      <li>
        <NavLinks to={"/coverage"}>Coverage</NavLinks>
      </li>
      <li>
        <NavLinks to="/about-us">About Us</NavLinks>
      </li>
      <li>
        <NavLinks to="pricing">Pricing</NavLinks>
      </li>
      <li>
        <NavLinks to="/be-a-rider">Be a Rider</NavLinks>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/">
              <Logo></Logo>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-2">
            <ThemeSwitcher></ThemeSwitcher>
            <Link className="btn">Sign In</Link>
            <Button icon={MdOutlineArrowOutward} iconPosition="right">
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
