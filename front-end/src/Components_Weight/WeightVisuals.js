import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Visuals() {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(true);
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

  const clickHandler = () => {
    setToggle(!toggle);
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
              const size = active && active.symbol == data.symbol ? 12 : 8;
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
            <Text textAnchor="middle" fill="#000" className="text-3xl">
              {`Current Weight: ${weightsArray[weightsArray.length - 1]} lbs`}
            </Text>
            <Text textAnchor="middle" fill="#aaa" className="text-1xl" dy={160}>
              {`Goal Weight: ${
                goalWeightArray[goalWeightArray.length - 1]
              } lbs`}
            </Text>
          </>
        </Group>
      </svg>
    </div>
  );
}
