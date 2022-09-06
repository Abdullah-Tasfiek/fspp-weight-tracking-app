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
    <div className="content-center">
      <div className="text-3xl">
        <span className="underline">Name:</span> {name}
        <br></br>
        <br></br>
        <span className="underline">Date:</span> {date}
        <br></br>
        <br></br>
        <span className="underline">Description:</span> {description}
        <br></br>
        <br></br>
        <span className="underline">Calories:</span> {calories}
        <br></br>
        <br></br>
        <span className="underline">Protein:</span> {protein}g<br></br>
        <br></br>
        <span className="underline">Carbs:</span> {carbs}g<br></br>
        <br></br>
        <span className="underline">Fats:</span> {fats}g<br></br>
        <br></br>
        <span className="underline">Fiber:</span> {fiber}g
      </div>

      <br />
      <button className="button" href="/myfoods">
        <Link to={"/myfoods"}>Back</Link>
      </button>
      <br />
      <button className="button">
        <Link to={`/myfoods/${id}/edit`}>Edit Food</Link>
      </button>
      <br></br>
      <button className="button" id={foods.id} onClick={handleDelete}>
        Delete Entry
      </button>
    </div>
  );
};

export default ShowFood;
