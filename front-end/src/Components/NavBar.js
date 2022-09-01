import { Link } from "react-router-dom";
import React from "react";
import icon from "../heart-logo.png";
import "../App.css";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <img src={icon} className="App-logo" alt="logo" />
        <h2>BetterHealth</h2>
      </Link>
      <br></br>
      <Link className="nav-link" to="/myfoods">
        <button href="/myfoods">My Foods</button>
      </Link>
    </nav>
  );
};

export default Nav;
