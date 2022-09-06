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

  let weightsArray = [];
  let calculateWeightArray = [];

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

  return (
    <div>
      {data.map((weight) => {
        weightsArray.push(weight.starting_weight);
      })}
      {data.map((weight) => {
        calculateWeightArray.push(weight.current_weight);
      })}
      <br></br>
      <br></br>
      <h1 className="text-2xl">
        Your starting weight is: {weightsArray[weightsArray.length - 1]} lbs
      </h1>
      <h1 className="text-2xl">
        {weightGainOrLoss(
          weightsArray[weightsArray.length - 1],
          calculateWeightArray[calculateWeightArray.length - 1]
        )}
      </h1>
    </div>
  );
}
