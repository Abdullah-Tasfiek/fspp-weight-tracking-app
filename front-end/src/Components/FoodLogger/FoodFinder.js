import React from "react";
import "./FoodFinder.scss";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "axios";
import FoodLog from "./FoodLogs";
import NutritionLabel from "./NutritionLabel";
import ScanBarcode from "./ScanBarcode";
const EDAMAM_API = process.env.REACT_APP_EDAMAM_API_URL;

function FoodLogger() {
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState({
    name: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [foodData, setFoodData] = useState([]);
  const [newFoodItem, setNewFoodItem] = useState("");
  const [error, setError] = useState(null);
  const errorMessage =
    "We had a problem analyzing this. Please check the ingredient spelling or if you have entered quantities for the ingredients.";

  const handleTextChange = (event) => {
    setFood({ ...food, [event.target.id]: event.target.value });
    setNewFoodItem(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newFoodItem.trim() === "") {
      setError("Please enter an ingredient");
      return;
    }

    const formattedInput = formatFoodDataFromUser(newFoodItem);
    setNewFoodItem(formattedInput);
    setLoading(true);
    const NEW_API = `${EDAMAM_API}${newFoodItem}`;
    try {
      const res = await axios.get(NEW_API);
      if (res.status === 200)
        setTimeout(() => {
          setFoodData(res.data);
          console.log(foodData);
          setLoading(false);
          setIsSubmitted(true);
          setError("");
        }, 1000);
    } catch (error) {
      console.error(error);
      setError(errorMessage);
    }
  };

  const formatFoodDataFromUser = (string) => {
    const formattedString = string.replaceAll(" ", "%20");
    return formattedString;
  };

  return (
    <div className="foodLoggerBackground">
      <div className="foodLoggerBackground__title">
        <div>Don't know the nutrition facts?</div>
        <div>We have different options for you to find nutritional data!</div>
        <div></div>
        <ScanBarcode />
      </div>
      <div className="foodLoggerBackground__container">
        <div className="foodLoggerBackground__container__titles">
          <div>
            <div>
              Write out an ingredient and we'll provide the nutritional facts
              through AI and Nutrition Analysis!
            </div>
            Enter an ingredient for what you are cooking, like:
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
              placeholder="Enter ingredient"
              autoComplete="off"
            />
            <input type="submit" value="Analyze" className="mx-1"></input>
            {error && <p>{error}</p>}
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
