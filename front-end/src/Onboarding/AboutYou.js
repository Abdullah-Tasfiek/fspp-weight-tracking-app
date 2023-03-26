import React from "react";
import "./AboutYou.scss";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function AboutYou() {
  const [value, setValue] = React.useState(dayjs("2023-01-26"));
  const [gender, setGender] = React.useState("");
  const [feet, setFeet] = React.useState("");
  const [inches, setInches] = React.useState("");
  const [pounds, setPounds] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFeetChange = (event) => {
    setFeet(event.target.value);
  };

  const handleInchesChange = (event) => {
    setInches(event.target.value);
  };

  const handlePoundsChange = (event) => {
    setPounds(event.target.value);
  };

  return (
    <div className="onboarding">
      <div className="onboarding__progress">
        <div className="onboarding__progress1">
          <div className="flex justify-center">
            <Link to="/welcome/about-you">
              <img
                src={require("../Assets/number-one (1).png")}
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
            <Link to="/welcome/exercise-target">
              <img src={require("../Assets/number-5.png")} />
            </Link>
          </div>
          Exercise Target
        </div>
      </div>
      <form>
        <div className="onboarding__heading">
          Tell me a little bit about yourself.
        </div>
        <div className="onboarding__about">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date of Birth"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
              className="w-60"
            />
          </LocalizationProvider>
          <br></br>
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="w-60">
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Age"
                onChange={handleGenderChange}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Non-Binary"}>Non-Binary</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br></br>
          <label>Height</label>
          <br></br>
          <div className="inline-block">
            <Box sx={{ minWidth: 120 }}>
              <FormControl className="w-60">
                <InputLabel id="demo-simple-select-label">Feet</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={feet}
                  label="Feet"
                  onChange={handleFeetChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br></br>
            <Box sx={{ minWidth: 120 }}>
              <FormControl className="w-40">
                <InputLabel id="demo-simple-select-label">Inches</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inches}
                  label="Feet"
                  onChange={handleInchesChange}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <br></br>
          <label>Weight</label>
          <br></br>
          <FormControl sx={{ m: 0, width: "21.3ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              value={pounds}
              onChange={handlePoundsChange}
            />
          </FormControl>
          {/* <TextField
            id="outlined-basic"
            label="Pounds"
            variant="outlined"
            className="w-40"
            onChange={handlePoundsChange}
          /> */}
        </div>
        <div className="onboarding__footer">
          <div className="onboarding__footer__navigation">
            <Link to="/welcome">
              <img src={require("../Assets/back.png")} align="left"></img>
              <span className="onboarding__footer__navigation__back">Back</span>
            </Link>
            <Link to="/welcome/target-weight">
              <img src={require("../Assets/next.png")} align="right"></img>
              <span className="onboarding__footer__navigation__next">Next</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
