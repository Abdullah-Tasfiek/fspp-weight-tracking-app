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
  };
  return (
    <div className="form">
      <h3>Add Your Weight For Today!</h3>
      <form onSubmit={handleSubmit} className="weight-form">
        <label htmlFor="starting_weight">Starting Weight:</label>
        <input
          type="number"
          name="starting-weight-count"
          onChange={handleTextChange}
          id="starting_weight"
        />
        <label htmlFor="goal_weight">Goal Weight:</label>
        <input
          type="number"
          name="goal-weight-count"
          onChange={handleTextChange}
          id="goal_weight"
        />
        <label htmlFor="date">Date:</label>
        <input type="text" name="date" onChange={handleTextChange} id="date" />
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={handleNewLogSubmit} className="weight-form">
        <label htmlFor="date">Date:</label>
        <input type="text" name="date" onChange={handleTextChange} id="date" />
        <label htmlFor="current_weight">Current Weight:</label>
        <input
          type="number"
          name="current-weight-count"
          onChange={handleTextChange}
          id="current_weight"
        />
        <br></br>
        <input type="submit" value="Submit Current Weight" />
      </form>
      <button className="button">
        <Link to="/myweight/logs">View Your Weight Logs</Link>
      </button>
    </div>
  );
}

export default NewWeight;
