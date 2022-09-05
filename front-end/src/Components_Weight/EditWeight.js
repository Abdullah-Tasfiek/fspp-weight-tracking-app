import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditWeight() {
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/myweight/logs/${id}`)
      .then((response) => {
        setWeight(response.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, navigate]);

  const updateWeight = (editedWeight) => {
    axios
      .put(`${API}/myweight/logs/${id}`, editedWeight)
      .then(() => {
        navigate(`/myweight/logs`);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateWeight(weight, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit} id="edit-form">
        <label htmlFor="date">Date: </label>
        <br></br>
        <input
          id="date"
          value={`${weight.date}`}
          type="text"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="current_weight">Weight: </label>
        <br></br>
        <input
          id="current_weight"
          value={`${weight.current_weight}`}
          type="number"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <input type="submit" />
      </form>
      <Link to={`/myweight/logs`}>
        <button className="button back">{`Back to Logs`}</button>
      </Link>
    </div>
  );
}

export default EditWeight;
