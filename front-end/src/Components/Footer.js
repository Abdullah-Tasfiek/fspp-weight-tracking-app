import React from "react";
import "../App.css";
export default function Footer() {
  return (
    <footer className="footer bg-grey">
      <span className="fonts-font text-sm sm:text-center">
        © 2023{" "}
        <a className="hover:underline" href="/">
          BetterHealth™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center"></ul>
    </footer>
  );
}
