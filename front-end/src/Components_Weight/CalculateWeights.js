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
      return `You've lost a total of ${weightLoss} lbs!`;
    } else if (starting <= current) {
      weightGained = current - starting;
      return `You've gained a total of ${weightGained} lbs!`;
    }
  };

  const getStartingWeight = (array) => {
    let weightsArray = [];
    array.map((weight) => {
      return weightsArray.push(weight.starting_weight);
    });
    return weightsArray[weightsArray.length - 1];
  };

  const getCurrentWeight = (array) => {
    let calculateWeightArray = [];
    array.map((weight) => {
      return calculateWeightArray.push(weight.current_weight);
    });
    return calculateWeightArray[calculateWeightArray.length - 1];
  };

  return (
    <div>
      <div>{getStartingWeight(data)}</div>
      <h1 className="text-2xl">
        Your starting weight is: {getStartingWeight(data)} lbs
      </h1>
      <h1 className="text-2xl">
        {weightGainOrLoss(getStartingWeight(data), getCurrentWeight(data))}
      </h1>
    </div>
  );
}
