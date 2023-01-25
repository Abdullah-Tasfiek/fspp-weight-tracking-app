import React from "react";
import "./Welcome.scss";

export default function Welcome() {
  return (
    <div className="landingCard">
      <div className="landingCard__heading">
        <div className="landingCard__h1">Welcome to BetterHealth</div>
        <div className="landingCard__h2">
          Let's work together to take control of your weight!
        </div>
      </div>
      <div className="landingCard__steps">
        <img src={require("../Assets/weight-loss.png")} alt="checkmark"/>
        <div>You've taken the first step by signing up.</div>
        <img src={require("../Assets/weight-loss.png")} alt="profile" />
        <div>
          Now I need to know a little about you so that we can decide on a
          healthy weight goal.
        </div>
        <img src={require("../Assets/weight-loss.png")} alt="filter"/>
        <div>Then we can set some daily targets to help you get there.</div>
      </div>
      <div className="landingCard__footer">
        <button>GET STARTED</button>
      </div>
    </div>
  );
}
