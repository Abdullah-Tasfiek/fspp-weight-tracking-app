import React from "react";
import "./GoalWeight.scss";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function GoalWeight() {
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
              <img src={require("../Assets/number-2 (1).png")} />
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
              <img src={require("../Assets/number-four.png")} />
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
        <div className="onboarding__heading">
          How much would you like to weigh?
        </div>
        <div className="onboarding__about">
          <div>
            A healthy BMI for an adult is between lowerRange and upperRange
          </div>
          <br></br>
          <div>
            Your current BMI is currentBmi. This means your healthy range is
            between lowerWeight lb and upperWeight lb.
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
            <Link to="/welcome/about-you">
              <img src={require("../Assets/back.png")} align="left"></img>
              <span className="onboarding__footer__navigation__back">Back</span>
            </Link>
            <Link to="/welcome/activity-level">
              <img src={require("../Assets/next.png")} align="right"></img>
              <span className="onboarding__footer__navigation__next">Next</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
