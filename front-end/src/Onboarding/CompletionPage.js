import React from "react";
import "./CompletionPage.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function CompletionPage() {
  return (
    <div className="landingCard">
      <div className="landingCard__heading">
        <div className="landingCard__h1">You're Ready to go!</div>
        <div className="landingCard__h2">
          Thank you for completing your profile!
        </div>
      </div>
      <div className="landingCard__steps">
        <img src={require("../Assets/check.png")} alt="checkmark" />
        <div> Let's work together to take control of your weight!</div>
        <img src={require("../Assets/check.png")} alt="checkmark" />
        <div>Click done to finalize your submission!</div>
      </div>
      <div className="landingCard__footer">
        <div className="onboarding__footer__navigation">
          <Link to="/welcome/exercise-target">
            <img src={require("../Assets/back.png")} align="left"></img>
            <span className="onboarding__footer__navigation__backWord">Back</span>
          </Link>
          <Link to="/home">
            <Button variant="contained">Done</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
