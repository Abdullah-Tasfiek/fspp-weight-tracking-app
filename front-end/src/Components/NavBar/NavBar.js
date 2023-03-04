import React from "react";
import "./NavBar.scss";
import { useState, useEffect } from "react";

const Nav = () => {
  const [textColor, setTextColor] = useState("#2A64E5");
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 881) {
        setTextColor("#2A64E5");
        setBackgroundColor("white");
      } else {
        setTextColor("white");
        setBackgroundColor("black");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    color: textColor,
  };

  const background = {
    backgroundColor: backgroundColor,
  };
  return (
    <nav className="navbar" style={background}>
      <div className="navbar__container">
        {/* Logo */}
        <div style={style} className="navbar__container__logo">
          <a href="/home">BetterHealth</a>
        </div>
        {/* Navbar Routes*/}
        <div className="navbar__container__routes">
          <div style={style}>
            <a href="/myweight">My Weight</a>
          </div>
        </div>
        <div className="navbar__container__routes">
          <div style={style}>
            <a href="/myfoods">My Foods</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
