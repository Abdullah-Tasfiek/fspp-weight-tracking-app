import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./DailySummary.scss";
import AddFoodModal from "./AddFoodModal";

export default function DailySummary() {
  const [foods, setFoods] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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
    <div className="dailySummary">
      {foods.map((food, index) => {
        totalCaloriesConsumed += parseInt(food.calories);
        // return <TotalCalories key={index} food={food} index={index} />;
      })}
      <div>
        Total Calories Consumed {foods.calories}
        <button>
          <span className="text-blue">reset</span>
        </button>
        <div className="text-green text-5xl font-bold">
          {totalCaloriesConsumed}
        </div>
      </div>
      <button
        className="bg-grey openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add Food
      </button>
      <div>{openModal && <AddFoodModal closeModal={setOpenModal}/>}</div>
    </div>
  );
}
