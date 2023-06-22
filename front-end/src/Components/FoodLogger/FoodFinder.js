import React from "react";
import "./FoodFinder.scss";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "axios";
import data from "../../data/edamam.json";
import FoodLog from "./FoodLogs";
import NutritionLabel from "./NutritionLabel";
const foodItem = "vanilla%20ice%20cream%20bar";
const EDAMAM_API = process.env.REACT_APP_EDAMAM_API_URL;

function FoodLogger() {
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState({
    name: "",
  });
  const [foodData, setFoodData] = useState([]);
  const [foodLog, setFoodLog] = useState([]);
  const [nutritionFacts, setNutritionFacts] = useState([]);
  const [newFoodItem, setNewFoodItem] = useState("");
  const errorMessage =
    "We had a problem analyzing this. Please check the ingredient spelling or if you have entered a quantities for the ingredients.";

  const handleTextChange = (event) => {
    setFood({ ...food, [event.target.id]: event.target.value });
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNewFoodItem(formatFoodDataFromUser(food.name));
    setLoading(true);
    // const res = await axios.get(`${EDAMAM_API}${newFoodItem}`);
    setTimeout(() => {
      // setFoodData(res.data);
      setLoading(false);
    }, 1000);
  };

  const formatFoodDataFromUser = (string) => {
    return string.replaceAll(" ", "%20");
  };

  return (
    <div className="foodLoggerBackground">
      <div className="foodLoggerBackground__title">
        <div>Don't know the nutrition facts of what you ate?</div>
        <div>
          Search for an ingridient and we'll provide the nutritional facts!
        </div>
      </div>
      <div className="foodLoggerBackground__container">
        <div className="foodLoggerBackground__container__titles">
          <div>
            Enter an ingredient for what you are cooking, like:{" "}
            <ul className="text-green font-semibold">
              <li>1 cup of cooked white rice</li>
              <li>10 oz chickpeas</li>
              <li>1 serving of cooked chicken breast</li>
            </ul>
            ...etc,
          </div>
          <div>Enter ONE ingredient at a time.</div>
        </div>
        <div className="foodLoggerBackground__container__textArea"></div>
        {loading ? (
          <div>
            <Loader loading={loading} />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="text-3xl" htmlFor="name"></label>
            <input
              type="text"
              name="food-name"
              onChange={handleTextChange}
              id="name"
              className="foodLoggerBackground__container__btn"
            />
            <input type="submit" value="Analyze" className="mx-1"></input>
          </form>
        )}
        <div className="components">
          {/* <div>
            <FoodLog />
          </div>
          <div>
            <NutritionLabel />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FoodLogger;
