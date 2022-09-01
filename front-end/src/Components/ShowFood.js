import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowFood = () => {
  const [foods, setFoods] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/myfoods/${id}`).then((response) => {
      setFoods(response.data.payload);
    });
  }, [id, navigate, API]);
  const deleteFood = () => {
    axios
      .delete(`${API}/myfoods/${id}`)
      .then(() => {
        navigate(`/myfoods`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteFood();
  };

  const { date, name, description, calories, protein, carbs, fats, fiber } =
    foods;
  return (
    <div>
      <h3>{name}</h3>
      <article>
        <div>
          <h3>Date: {date}</h3>
          <h3>Description: {description}</h3>
          <h3>Calories: {calories}</h3>
          <h3>Protein: {protein}g</h3>
          <h3>Carbs: {carbs}g</h3>
          <h3>Fats: {fats}g</h3>
          <h3>Fiber: {fiber}g</h3>
        </div>
      </article>

      <br />
      <button href="/myfoods">
        <Link to={"/myfoods"}>Back</Link>
      </button>
      <br />
      <button>
        <Link to={`/myfoods/${id}/edit`}>Edit Food</Link>
      </button>
      <br></br>
      <button id={foods.id} onClick={handleDelete}>
        Delete Entry
      </button>
    </div>
  );
};

export default ShowFood;
