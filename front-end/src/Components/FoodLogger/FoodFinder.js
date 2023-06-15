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
  const [foodData, setFoodData] = useState([]);
  const [foodLog, setFoodLog] = useState([]);
  const [nutritionFacts, setNutritionFacts] = useState([]);
  const errorMessage =
    "We had a problem analysing this. Please check the ingredient spelling or if you have entered a quantities for the ingredients.";

  const getNutritionFacts = async () => {
    setLoading(true);
    // const res = await axios.get(`${EDAMAM_API}${foodItem}`);
    setTimeout(() => {
      //   setFoodData(res.data);
      setLoading(false);
    }, 1000);
    return;
  };

  // console.log("Json:", data.calories);

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
        <div className="foodLoggerBackground__container__textArea">
          {/* <textarea
            style={{ width: "40%" }}
            className="foodLoggerBackground__container__textArea__border"
          ></textarea> */}
          <input style={{ border: "solid 1px black", padding: "5px" }}></input>
        </div>
        {loading ? (
          <div>
            <Loader loading={loading} />
          </div>
        ) : (
          <div>
            <button
              onClick={getNutritionFacts}
              className="foodLoggerBackground__container__btn bg-green"
            >
              Analyze
            </button>
          </div>
        )}
        <div className="components">
          <div>
            <FoodLog />
          </div>
          <div>
            <NutritionLabel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodLogger;
