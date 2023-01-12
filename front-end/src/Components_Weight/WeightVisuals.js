import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Visuals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/myweight/logs`)
      .then((res) => {
        setData(res.data.payload);
      })
      .catch((e) => console.log("Visual call error", e));
  }, []);

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

  const updateWeightValues = (array) => {
    let weightsArray = [];
    array.map((weight) => weightsArray.push(weight.current_weight));
    return weightsArray[weightsArray.length - 1];
  };

  return (
    <div className="grid place-items-center">
      <div>
        <div className="text-3xl">
          {`Current Weight: ${updateWeightValues(data)} lbs`}
        </div>
        <div>{`Goal Weight: ${goalWeight(data)} lbs`}</div>
      </div>
    </div>
  );
}
