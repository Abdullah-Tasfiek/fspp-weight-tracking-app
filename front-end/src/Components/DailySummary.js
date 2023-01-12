import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DailySummary() {
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
    <div className="bg-grey p-6">
      {foods.map((food, index) => {
        totalCaloriesConsumed += parseInt(food.calories);
        // return <TotalCalories key={index} food={food} index={index} />;
      })}
      <div>
        Total Calories Consumed {foods.calories}
        <div className="text-green text-2xl">{totalCaloriesConsumed}</div>
      </div>
      <Link to="/myfoods/new" className="bg-grey">
        Add Food
      </Link>
    </div>
  );
}
