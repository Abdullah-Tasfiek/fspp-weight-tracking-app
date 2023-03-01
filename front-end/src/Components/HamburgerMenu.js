import React, { useState, useEffect } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".hamburger-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="hamburger-menu">
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
        {isOpen && (
          <nav>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: "200px",
                background: "white",
                zIndex: 1,
              }}
            >
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
