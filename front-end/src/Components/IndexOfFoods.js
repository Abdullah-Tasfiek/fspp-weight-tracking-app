import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Food from "./Food";
import Calories from "./Calories";
import Date from "./Date";
import TotalCalories from "./TotalCalories";

const FoodIndex = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/myfoods`)
      .then((response) => {
        setFoods(response.data.payload);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  let totalCaloriesConsumed = 0;

  return (
    <div>
      <section className="Card">
        {foods.map((food, index) => {
          totalCaloriesConsumed += parseInt(food.calories);
          return <TotalCalories key={index} food={food} index={index} />;
        })}
        <h2>Total Calories Consumed: {totalCaloriesConsumed}</h2>
        <Link className="nav-link" to="/myfoods/new">
          <button href="/myfoods/new">Add Food</button>
        </Link>
        <h2>Food List</h2>
        <article className="Foods">
          <h3>Date</h3>
          <div className="card">
            {foods.map((food) => {
              return <Date key={food.id} food={food} />;
            })}
          </div>
          <h3>Foods</h3>
          <div className="card">
            {foods.map((food) => {
              return <Food key={food.id} food={food} />;
            })}
          </div>
          <h3>Calories</h3>
          <div className="card">
            {foods.map((food) => {
              return <Calories key={food.id} food={food} />;
            })}
          </div>
        </article>
      </section>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default FoodIndex;
