import React from "react";
import "./LandingComponent.scss";
import Button from "@mui/material/Button";

export default function LandingComponent() {
  return (
    <div>
      <div className="landingComponent">
        <div className="landingComponent__heading">
          <div className="landingComponent__heading__text">
            <div className="text">Feel Great.</div>
            <div className="text">Body and Mind.</div>
          </div>
          <div className="landingComponent__body__text">
            <span className="name">BetterHealth</span> is here to help you reach
            your fitness goals. We help you log your meals, calories, and
            weight. All in one place!
          </div>
          <div className="landingComponent_button">
            <a href="/welcome">
              <Button variant="contained">Join Now</Button>
            </a>
          </div>
        </div>
        <div className="landingComponent__image">
          <img
            className="landingComponent_image"
            alt="people"
            src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-2023-1440.webp"
          ></img>
        </div>
        <div></div>
      </div>
    </div>
  );
}
