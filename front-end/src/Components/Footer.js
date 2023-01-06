import React from "react";
import "../App.css";
export default function Footer() {
  return (
    <footer class="footer p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-grey">
      <span class="fonts-font text-sm sm:text-center text-red">
        © 2023 <a class="hover:underline">BetterHealth™</a>. All Rights
        Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-logored sm:mt-0"></ul>
    </footer>
  );
}
