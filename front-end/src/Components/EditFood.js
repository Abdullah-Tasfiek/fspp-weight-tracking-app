import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditFood() {
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/myfoods/${id}`)
      .then((response) => {
        setFood(response.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, navigate]);

  const updateFood = (editedFood) => {
    axios
      .put(`${API}/myfoods/${id}`, editedFood)
      .then(() => {
        navigate(`/myfoods`);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFood(food, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit} id="edit-form">
        <label htmlFor="date">Date:</label>
        <br></br>
        <input
          id="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={`${food.date}`}
          type="text"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="name">Name: </label>
        <br></br>
        <input
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={`${food.name}`}
          type="text"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="description">Description: </label>
        <br></br>
        <input
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="description"
          value={`${food.description}`}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="calories">Calories: </label>
        <br></br>
        <input
          id="calories"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          value={`${food.calories}`}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="protein">Protein: </label>
        <br></br>
        <input
          id="protein"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          value={`${food.protein}`}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="carbs">Carbs: </label>
        <br></br>
        <input
          id="carbs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          value={`${food.carbs}`}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="fats">Fats: </label>
        <br></br>
        <input
          id="fats"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          value={`${food.fats}`}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="fiber">Fiber: </label>
        <br></br>
        <input
          id="fiber"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          value={`${food.fiber}`}
          onChange={handleTextChange}
        />
        <br></br>
        <br></br>
        <input type="submit" />
      </form>
      <Link to={`/myfoods/${id}`}>
        <button className="button back">{`Back to ${food.name}`}</button>
      </Link>
    </div>
  );
}

export default EditFood;
