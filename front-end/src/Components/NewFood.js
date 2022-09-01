import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function NewFood() {
  const navigate = useNavigate();
  const [food, setFood] = useState({
    date: "",
    name: "",
    description: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
  });

  const handleTextChange = (event) => {
    setFood({ ...food, [event.target.id]: event.target.value });
  };

  // const handleCheckbox = () => {
  //   setFood({ ...food, is_healthy: !snack.is_healthy });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/myfoods`, food)
      .then((res) => {
        navigate(`/myfoods`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="form">
      <h3>Add a New Food!</h3>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          name="food-date"
          onChange={handleTextChange}
          id="date"
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="food-name"
          onChange={handleTextChange}
          id="name"
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="food-description"
          onChange={handleTextChange}
          id="description"
        />
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          name="calorie-count"
          onChange={handleTextChange}
          id="calories"
        />
        <label htmlFor="protein">Protein:</label>
        <input
          type="number"
          name="protein-count"
          onChange={handleTextChange}
          id="protein"
        />
        <label htmlFor="carbs">Carbs:</label>
        <input
          type="number"
          name="carb-count"
          onChange={handleTextChange}
          id="carbs"
        />
        <label htmlFor="fats">Fats:</label>
        <input
          type="number"
          name="fat-count"
          onChange={handleTextChange}
          id="fats"
        />
        <label htmlFor="fiber">Fibers:</label>
        <input
          type="number"
          name="fiber-count"
          onChange={handleTextChange}
          id="fibers"
        />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default NewFood;
