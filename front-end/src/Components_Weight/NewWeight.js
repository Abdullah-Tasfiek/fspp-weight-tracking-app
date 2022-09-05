import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function NewWeight() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState({
    starting_weight: 0,
    goal_weight: 0,
    date: "",
    current_weight: 0,
  });

  const handleTextChange = (event) => {
    setWeight({ ...weight, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/myweight`, weight)
      .then((res) => {
        navigate(`/myweight`);
      })
      .catch((err) => {
        console.warn(err);
      });
    alert(
      "Thank you for adding your starting and goal weight! Good luck on your fitness journey!"
    );
  };

  const handleNewLogSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/myweight`, weight)
      .then((res) => {
        navigate(`/myweight`);
      })
      .catch((err) => {
        console.warn(err);
      });
    alert("You added a new weight log!");
  };
  return (
    <div className="form">
      <div className="grid grid-cols-2 gap-2">
        <form onSubmit={handleSubmit} className="weight-form">
          <span className="grid grid-items-center text-3xl">
            Please input your weight in pounds!
          </span>
          <label htmlFor="starting_weight">Starting Weight:</label>
          <input
            type="number"
            name="starting-weight-count"
            onChange={handleTextChange}
            id="starting_weight"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br></br>
          <br></br>
          <label htmlFor="goal_weight">Goal Weight:</label>
          <input
            type="number"
            name="goal-weight-count"
            onChange={handleTextChange}
            id="goal_weight"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br></br>
          <br></br>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            name="date"
            onChange={handleTextChange}
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={handleNewLogSubmit} className="weight-form">
          <span className="grid grid-items-center text-3xl border-y-0">
            Add your weight for today in pounds!
          </span>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            name="date"
            onChange={handleTextChange}
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br></br>
          <label htmlFor="current_weight">Current Weight:</label>
          <input
            type="number"
            name="current-weight-count"
            onChange={handleTextChange}
            id="current_weight"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br></br>
          <br></br>
          <input type="submit" value="Submit Todays Weight" />
        </form>
      </div>
      <br></br>
      <div className="grid place-items-center">
        <button className="button">
          <Link to="/myweight/logs">View Your Weight Logs</Link>
        </button>
      </div>
    </div>
  );
}

export default NewWeight;
