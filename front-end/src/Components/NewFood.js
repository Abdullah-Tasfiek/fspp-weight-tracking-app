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
    <div className="content-center">
      <h3 className="text-5xl">Add a New Food!</h3>
      <br></br>
      <form onSubmit={handleSubmit} className="form">
        <label className="text-3xl" htmlFor="date">
          Date:
        </label>
        <input
          type="text"
          name="food-date"
          onChange={handleTextChange}
          id="date"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <br></br>
        <label className="text-3xl" htmlFor="name">Name: </label>
        <input
          type="text"
          name="food-name"
          onChange={handleTextChange}
          id="name"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <br></br>
        <label className="text-3xl" htmlFor="description">Description: </label>
        <input
          type="text"
          name="food-description"
          onChange={handleTextChange}
          id="description"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <br></br>
        <label className="text-3xl" htmlFor="calories">Calories: </label>
        <input
          type="number"
          name="calorie-count"
          onChange={handleTextChange}
          id="calories"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <br></br>
        <label className="text-3xl" htmlFor="protein">Protein: </label>
        <input
          type="number"
          name="protein-count"
          onChange={handleTextChange}
          id="protein"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <br></br>
        <label className="text-3xl" htmlFor="carbs">Carbs: </label>
        <input
          type="number"
          name="carb-count"
          onChange={handleTextChange}
          id="carbs"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <br></br>
        <label className="text-3xl" htmlFor="fats">Fats: </label>
        <input
          type="number"
          name="fat-count"
          onChange={handleTextChange}
          id="fats"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <br></br>
        <label className="text-3xl" htmlFor="fiber">Fibers: </label>
        <input
          type="number"
          name="fiber-count"
          onChange={handleTextChange}
          id="fibers"
          className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br></br>
        <br></br>
        <input type="submit" value="Add Food" />
      </form>
    </div>
  );
}

export default NewFood;
