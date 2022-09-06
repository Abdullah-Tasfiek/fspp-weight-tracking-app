import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Visuals() {
  const [active, setActive] = useState(null);
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
  let goalWeightArray = [];
  let caloriesArray = [];
  let i = 0;
  const width = 400;
  const half = width / 2;

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
    <div className="grid place-items-center">
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={data}
            pieValue={(data) => data.current_weight}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol === data.symbol ? 12 : 8;
              return half - size;
            }}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={i++}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)}></path>
                  </g>
                );
              });
            }}
          </Pie>
          {data.map((weight) => weightsArray.push(weight.current_weight))}
          {data.map((weight) => goalWeightArray.push(weight.goal_weight))}
          {data.map((food) => caloriesArray.push(food.calories))}
          {data.map((food) => caloriesArray.push(food.calories))}
          <>
            <Text textAnchor="middle" fill="#014421" className="text-3xl">
              {`Current Weight: ${weightsArray[weightsArray.length - 1]} lbs`}
            </Text>
            <Text
              textAnchor="middle"
              fill="#20B2AA"
              className="text-1xl"
              dy={160}
            >
              {`Goal Weight: ${goalWeight(data)} lbs`}
            </Text>
          </>
        </Group>
      </svg>
    </div>
  );
}
