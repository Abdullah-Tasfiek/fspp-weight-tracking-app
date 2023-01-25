import React from "react";
import "./AboutYou.scss";
import { Link } from "react-router-dom";

export default function AboutYou() {
  return (
    <div className="onboarding">
      <div className="onboarding__progress">
        <div className="onboarding__progress1">About You</div>
        <div className="onboarding__progress2">Goal Weight</div>
        <div className="onboarding__progress3">Activity Level</div>
        <div className="onboarding__progress4">Energy Target</div>
        <div className="onboarding__progress5">Exercise Target</div>
      </div>
      <form>
        <div className="onboarding__heading">
          Tell me a little bit about yourself.
        </div>
        <div className="onboarding__about">
          <label>Date of Birth</label>
          <input></input>
          <label>Gender</label>
          <input></input>
          <label>Height</label>
          <input></input>
          <label>Weight</label>
          <input></input>
        </div>
        <div className="onboarding__footer">
          <div className="text-left">
            <Link to="/welcome">Back</Link>
          </div>
          <Link to="/welcome/target-weight">
            <input type="submit" value="Next" />
          </Link>
        </div>
      </form>
    </div>
  );
}
