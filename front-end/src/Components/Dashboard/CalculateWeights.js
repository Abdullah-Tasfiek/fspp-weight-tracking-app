import { useState, useEffect } from "react";
import axios from "axios";
import "./CalculateWeights.scss";
const API = process.env.REACT_APP_API_URL;

export default function CalculateWeights() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/myweight/logs`)
      .then((res) => {
        setData(res.data.payload);
      })
      .catch((e) => console.log("Visual call error", e));
  }, []);

  const weightGainOrLossImage = (starting, current) => {
    let weightLoss = 0;
    let weightGained = 0;

    if (starting >= current) {
      weightLoss = starting - current;
      return (
        <div>
          <div className="calculateWeights__container__column1">
            <img
              className="calculateWeights__container__column1__image"
              src={require("../../Assets/weight-loss.png")}
            ></img>
          </div>
        </div>
      );
    } else if (starting <= current) {
      weightGained = current - starting;
      return (
        <div>
          <div className="calculateWeights__container__column1">
            <img
              className="calculateWeights__container__column1__image"
              src={require("../../Assets/weight-gain.png")}
            ></img>
          </div>
        </div>
      );
    }
  };

  const weightGainOrLoss = (starting, current) => {
    let weightLoss = 0;
    let weightGained = 0;

    if (starting >= current) {
      weightLoss = starting - current;
      return (
        <div>
          <div className="calculateWeights__container__column2__text color1">
            Lost: {weightLoss} lbs
          </div>
        </div>
      );
    } else if (starting <= current) {
      weightGained = current - starting;
      return (
        <div>
          <div className="calculateWeights__container__column2__text color2">
            Gained: {weightGained} lbs
          </div>
        </div>
      );
    }
  };

  const getStartingWeight = (array) => {
    let weightsArray = [];
    let number = 0;
    array.map((weight) => {
      return weightsArray.push(weight.starting_weight);
    });
    for (let i = 0; i < weightsArray.length; i++) {
      if (weightsArray[i] !== 0) {
        number = weightsArray[i];
      }
    }
    return number;
  };

  const getCurrentWeight = (array) => {
    let currentWeightArray = [];
    let number = 0;
    array.map((weight) => {
      return currentWeightArray.push(weight.current_weight);
    });
    for (let i = 0; i < currentWeightArray.length; i++) {
      if (currentWeightArray[i] !== 0) {
        number = currentWeightArray[i];
      }
    }
    return number;
  };

  const goalWeight = (array) => {
    let weightsArray = [];
    let number = 0;
    array.map((weight) => {
      return weightsArray.push(weight.goal_weight);
    });
    for (let i = 0; i < weightsArray.length; i++) {
      if (weightsArray[i] !== 0) {
        number = weightsArray[i];
      }
    }
    return number;
  };

  return (
    <div className="calculateWeights">
      <div className="calculateWeights__container">
        <div className="calculateWeights__container__column1">
          <img
            className="calculateWeights__container__column1__image"
            src={require("../../Assets/start.png")}
          ></img>
        </div>
        <div className="calculateWeights__container__column2__text">
          Starting Weight: {getStartingWeight(data)} lbs
        </div>
        <div>
          {weightGainOrLossImage(
            getStartingWeight(data),
            getCurrentWeight(data)
          )}{" "}
        </div>
        <div>
          {weightGainOrLoss(getStartingWeight(data), getCurrentWeight(data))}
        </div>
        <div className="calculateWeights__container__column1">
          <img
            className="calculateWeights__container__column1__image"
            src={require("../../Assets/current-weight.png")}
          ></img>
        </div>
        <div className="calculateWeights__container__column2__text">
          Current Weight: {getCurrentWeight(data)} lbs
        </div>
        <div className="calculateWeights__container__column1">
          <img
            className="calculateWeights__container__column1__image"
            src={require("../../Assets/goal.png")}
          ></img>
        </div>
        <div className="calculateWeights__container__column2__text">
          Goal Weight: {goalWeight(data)} lbs
        </div>
      </div>
    </div>
  );
}
