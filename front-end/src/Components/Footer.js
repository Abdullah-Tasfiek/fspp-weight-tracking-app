import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__columns__column1">BetterHealth</div>
        <div className="footer__columns__column2">
          <div>
            <a href="/myweight">Weight</a>
          </div>
          <div>
            <a href="/myfoods">Nutrition</a>
          </div>
          <div>
            <a href="/">About</a>
          </div>
          <div>
            <a href="/signin">Membership</a>
          </div>
        </div>
      </div>
      <div className="footer__footerEnd">
        <div className="footer__footerEnd__border"></div>
        <div className="footer__footerEnd__copyright">
          Copyright © 2023{" "}
          <a href="/" className="underline">
            BetterHealth
          </a>
          ™. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
