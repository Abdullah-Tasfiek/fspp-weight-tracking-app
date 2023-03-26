import React from "react";
import { Link } from "react-router-dom";
import "../Onboarding/ExerciseTarget.scss";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ExerciseTarget() {
  const [exerciseTarget, setExerciseTarget] = useState("");

  const handleExerciseTargetChange = (event) => {
    setExerciseTarget(event.target.value);
  };
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
              <img src={require("../Assets/number-four.png")} />
            </Link>
          </div>
          Energy Target
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress5">
          <div className="flex justify-center">
            <img src={require("../Assets/number-5 (1).png")} />
          </div>
          Exercise Target
        </div>
      </div>
      <form>
        <div className="onboarding__heading">Get out there!</div>
        <div className="onboarding__about">
          <div>You should aim to do a little exercise every day.</div>
          <br></br>
          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl className="w-60">
                <InputLabel id="demo-simple-select-label">
                  Exercise Target
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={exerciseTarget}
                  label="Light"
                  onChange={handleExerciseTargetChange}
                >
                  <MenuItem value={1}>10 mins</MenuItem>
                  <MenuItem value={2}>20 mins</MenuItem>
                  <MenuItem value={3}>30 mins</MenuItem>
                  <MenuItem value={4}>40 mins</MenuItem>
                  <MenuItem value={5}>50 mins</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <br></br>
        </div>
        <div className="onboarding__footer">
          <div className="onboarding__footer__navigation">
            <Link to="/welcome/energy-target">
              <img src={require("../Assets/back.png")} align="left"></img>
              <span className="onboarding__footer__navigation__back">Back</span>
            </Link>
            <Link to="/welcome/completed">
              <img src={require("../Assets/next.png")} align="right"></img>
              <span className="onboarding__footer__navigation__next">Next</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
