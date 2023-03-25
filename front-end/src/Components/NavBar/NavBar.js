import React from "react";
import "./NavBar.scss";
import { useState, useEffect } from "react";

const Nav = () => {
  // const [textColor, setTextColor] = useState("white");
  // const [backgroundColor, setBackgroundColor] = useState("#222430");

  //to change burger classes
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setisMenuClicked] = useState(false);

  // useEffect(() => {
  //   function handleScroll() {
  //     if (window.scrollY < 600) {
  //       setTextColor("white");
  //       setBackgroundColor("#222430");
  //     } else {
  //       setTextColor("white");
  //       setBackgroundColor("#222430");
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const style = {
  //   color: textColor,
  // };

  // const background = {
  //   backgroundColor: backgroundColor,
  // };

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }

    setisMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__container__logo">
          <a href="/home">BetterHealth</a>
        </div>
        {/* Navbar BurgerMenu*/}
        <div className="navbar__container__burgerMenu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </div>
      <div className={menuClass}>
        <div className="navbar__menu">
          <div className="navbar__menu__item">
            <a href="/">
              <img src={require("../../Assets/home.png")} align="left"></img>Home
            </a>
          </div>
          <div className="navbar__menu__item">
            <a href="/welcome">
              <img src={require("../../Assets/exam.png")} align="left"/>
              Welcome
            </a>
          </div>
          <div className="navbar__menu__item">
            <a href="/myweight">
              <img src={require("../../Assets/weighing-scale (3).png")} align="left"/>
              Weigh In
            </a>
          </div>
          <div className="navbar__menu__item">
            <a href="/myweight/logs">
              <img src={require("../../Assets/list (1).png")} align="left"/>
              Weight Logs
            </a>
          </div>
          <div className="navbar__menu__item">
            <a href="/myfoods">
              <img src={require("../../Assets/calculator.png")} align="left"/>
              Track Foods
            </a>
          </div>
          <div className="navbar__menu__item">
            <a href="/myfoods/new">
              <img src={require("../../Assets/restaurant.png")} align="left"/>
              Add Food
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
