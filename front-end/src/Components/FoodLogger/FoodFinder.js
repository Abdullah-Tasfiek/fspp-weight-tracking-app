import React from "react";
import "./FoodFinder.scss";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "axios";
import data from "../../data/edamam.json";
import FoodLog from "./FoodLogs";
import NutritionLabel from "./NutritionLabel";
const foodItem = "1%20cup%20of%20cooked%20white%20rice";
const EDAMAM_API = process.env.REACT_APP_EDAMAM_API_URL;

function FoodLogger() {
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState({
    name: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [foodData, setFoodData] = useState([]);
  const [newFoodItem, setNewFoodItem] = useState("");
  const errorMessage =
    "We had a problem analyzing this. Please check the ingredient spelling or if you have entered a quantities for the ingredients.";

  const handleTextChange = (event) => {
    setFood({ ...food, [event.target.id]: event.target.value });
    setNewFoodItem(event.target.value);
    console.log("newFoodITEM!!!!!!:::::", newFoodItem);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedInput = formatFoodDataFromUser(newFoodItem);
    setNewFoodItem(formattedInput);
    setLoading(true);
    const NEW_API = `${EDAMAM_API}${newFoodItem}`; // Use encodeURIComponent to properly encode the newFoodItem
    try {
      const res = await axios.get(NEW_API);
      if(res.status === 200) 
      setTimeout(() => {
        setFoodData(res.data);
        console.log(foodData)
        setLoading(false);
        setIsSubmitted(true);
      }, 1000);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };

  const formatFoodDataFromUser = (string) => {
    const formattedString = string.replaceAll(" ", "%20");
    return formattedString;
  };

  return (
    <div className="foodLoggerBackground">
      <div className="foodLoggerBackground__title">
        <div>Don't know the nutrition facts of what you ate?</div>
        <div>
          Search for an ingredient and we'll provide the nutritional facts!
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
        {isSubmitted ? (
          <div className="components">
            <div>
              <FoodLog foodData={foodData} />
            </div>
            <div>
              <NutritionLabel foodData={foodData} />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default FoodLogger;
