import { Link } from "react-router-dom";
import React from "react";
import icon from "../heart-logo.png";
import "../App.css";

const Nav = () => {
  const handleClick = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };
  return (
    <nav className="pr-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link className="hover:text-red-800" to="/">
          <img src={icon} className="App-logo" alt="logo" />
          <h2>BetterHealth</h2>
        </Link>
        {/* Navbar Routes*/}
        <div className="hidden md:flex space-x-40 pr-30 text-2xl">
          <Link className="hover:text-red-800" to="/myweight">
            <button href="/myweight">My Weight</button>
          </Link>
          <Link className="hover:text-red-800" to="/myfoods">
            <button href="/myfoods">My Foods</button>
          </Link>
        </div>
        {/* Hamburger Icon */}
        <button
          onClick={handleClick}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none p-1"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="/myweight">My Weight</a>
          <a href="/myfoods">My Foods</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
