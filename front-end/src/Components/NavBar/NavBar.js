import React from "react";
import "./NavBar.scss";
import { useState } from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-expand-xl">
      <div className="container-fluid">
        {/* Logo */}
        <div className="navbar__container__logo">
          <a className="navbar-brand text-white" href="/">
            <img
              src={require("../../Assets/logo192.png")}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Company"
            />{" "}
            <span className="text-4xl">BetterHealth</span>
          </a>
          <span className="text-right">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggleMobileMenu"
              aria-controls="toggleMobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </span>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="toggleMobileMenu">
        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <a
              className="nav-link text-white"
              aria-current="page"
              href="/welcome"
            >
              Welcome
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/home">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/myweight">
              Weight
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/myfoods">
              Food
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
