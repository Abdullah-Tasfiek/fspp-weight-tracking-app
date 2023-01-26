import React from "react";
import "./AboutYou.scss";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function AboutYou() {
  const [value, setValue] = React.useState(dayjs("2023-01-26T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="onboarding">
      <div className="onboarding__progress">
        <div className="onboarding__progress1">
          <div className="flex justify-center">
            <img
              src={require("../Assets/number-one (1).png")}
              className="flex justify-center"
            />
          </div>
          About You
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress2">
          <div className="flex justify-center">
            <img src={require("../Assets/number-2.png")} />
          </div>
          Goal Weight
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress3">
          <div className="flex justify-center">
            <img src={require("../Assets/number-3.png")} />
          </div>
          Activity Level
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress4">
          <div className="flex justify-center">
            <img src={require("../Assets/number-four.png")} />
          </div>
          Energy Target
        </div>
        <hr class="w-14 h-0.5 my-4 bg-gray-400" />
        <div className="onboarding__progress5">
          <div className="flex justify-center">
            <img src={require("../Assets/number-5.png")} />
          </div>
          Exercise Target
        </div>
      </div>
      <form>
        <div className="onboarding__heading">
          Tell me a little bit about yourself.
        </div>
        <div className="onboarding__about">
          <label>Date of Birth</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
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
