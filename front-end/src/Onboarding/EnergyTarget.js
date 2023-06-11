import React from "react";
import "./EnergyTarget.scss";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function EnergyTarget() {

  return (
    <div className="onboarding">
      <div className="onboarding__progress">
        <div className="onboarding__progress1">
          <div className="flex justify-center">
            <Link to="/welcome/about-you">
              <img
                src={require("../Assets/number-one.png")}
                className="flex justify-center"
              />
            </Link>
          </div>
          About You
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress2">
          <div className="flex justify-center">
            <Link to="/welcome/target-weight">
              <img src={require("../Assets/number-2.png")} />
            </Link>
          </div>
          Goal Weight
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress3">
          <div className="flex justify-center">
            <Link to="/welcome/activity-level">
              <img src={require("../Assets/number-3.png")} />
            </Link>
          </div>
          Activity Level
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress4">
          <div className="flex justify-center">
            <Link to="/welcome/energy-target">
              <img src={require("../Assets/number-four (1).png")} />
            </Link>
          </div>
          Energy Target
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress5">
          <div className="flex justify-center">
            <Link to="/welcome/exercise-target">
              <img src={require("../Assets/number-5.png")} />
            </Link>
          </div>
          Exercise Target
        </div>
      </div>
      <form>
        <div className="onboarding__heading">Daily Energy</div>
        <div className="onboarding__about">
          <div>
            Based on what you've told us, we recommended a target range of 1850
            cal to 2050 cal.
          </div>
          <br></br>
          <div className="onboarding__about__switch">
            <FormControlLabel
              value="end"
              control={<Switch defaultChecked color="warning" />}
              label="Use recommendation"
              labelPlacement="end"
            />
          </div>
          <br></br>
          <div>
            To get you started, we've set an intermediate goal weightNumber
          </div>
        </div>
        <div className="onboarding__footer">
          <div className="onboarding__footer__navigation">
            <Link to="/welcome/activity-level">
              <img src={require("../Assets/back.png")} align="left"></img>
              <span className="onboarding__footer__navigation__back">Back</span>
            </Link>
            <Link to="/welcome/exercise-target">
              <img src={require("../Assets/next.png")} align="right"></img>
              <span className="onboarding__footer__navigation__next">Next</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
