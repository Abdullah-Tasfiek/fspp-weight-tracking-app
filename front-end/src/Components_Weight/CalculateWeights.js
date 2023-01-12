import { useState, useEffect } from "react";
import axios from "axios";
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

  const weightGainOrLoss = (starting, current) => {
    let weightLoss = 0;
    let weightGained = 0;

    if (starting >= current) {
      weightLoss = starting - current;
      return (
        <div>
          <img src={require("../Assets/weight-loss.png")}></img>
          {weightLoss} lbs
        </div>
      );
    } else if (starting <= current) {
      weightGained = current - starting;
      return (
        <div>
          <img src={require("../Assets/weight-gain.png")}></img>
          {weightGained} lbs
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
    <div >
      <div className="grid grid-cols-2 text-xl place-items-center" >
        <div className="">
          <img src={require("../Assets/start.png")}></img>
          {getStartingWeight(data)} lbs
        </div>
        <div className="text-center">
          {weightGainOrLoss(getStartingWeight(data), getCurrentWeight(data))}
        </div>
        <div className="text-align">
          <img src={require("../Assets/current-weight.png")}></img>
          {getCurrentWeight(data)} lbs
        </div>
        <div className="">
          <img src={require("../Assets/goal.png")}></img>
          {goalWeight(data)} lbs
        </div>
      </div>
    </div>
  );
}
