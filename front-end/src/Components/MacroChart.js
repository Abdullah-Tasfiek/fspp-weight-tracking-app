import "../index.css";
import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { macro: "Protein", value: 200 },
  { macro: "Carbs", value: 180 },
  { macro: "Protein", value: 30 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function MacroChart() {
  return (
    <div className="MacroChart">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <div>{data01.macro}</div>
        <Tooltip />
      </PieChart>
    </div>
  );
}
