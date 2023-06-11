import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./DailySummary.scss";
import AddFoodModal from "./AddFoodModal";
import AddWeightModal from "./AddWeightModal";

export default function DailySummary() {
  const [foods, setFoods] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openWeightModal, setOpenWeightModal] = useState(false);

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
  let color = "#9DC152";

  return (
    <div className="dailySummaryBackground">
      <div className="dailySummaryBackground__container">
        <div className="dailySummaryBackground__container__header">
          <h3>Your Daily Summary</h3>
        </div>
        <div className="dailySummaryBackground__container__body">
          <div className="dailySummaryBackground__container__body__summary">
            <div className="dailySummaryBackground__container__body__summary__section1">
              Total Calories Consumed{" "}
              <button
                onClick={() => {
                  console.log("This should clear the calories");
                }}
              >
                <span className="text-blue">reset</span>
              </button>
              <div className="dailySummaryBackground__container__body__summary__section1__calories">
                {foods.map((food, index) => {
                  totalCaloriesConsumed += parseInt(food.calories);
                  // return <TotalCalories key={index} food={food} index={index} />;
                })}
                {totalCaloriesConsumed} kcal
              </div>
            </div>
            <div className="dailySummaryBackground__container__body__summary__section2">
              <button
                className="addFoodBtn"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Add Food
              </button>
              <div>
                {openModal && <AddFoodModal closeModal={setOpenModal} />}
              </div>
              <button
                className="addWeightBtn"
                onClick={() => {
                  setOpenWeightModal(true);
                }}
              >
                Add Weight
              </button>
              <div>
                {openWeightModal && (
                  <AddWeightModal closeWeightModal={setOpenWeightModal} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="dailySummaryBackground__container__footer">
          {/* <div className="dailySummaryBackground__container__footer__progress"></div> */}
        </div>
      </div>
    </div>
  );
}
