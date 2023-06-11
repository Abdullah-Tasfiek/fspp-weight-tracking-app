import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import "./MacroChart.scss"

const data01 = [
  { macro: "Protein", value: 200 },
  { macro: "Carbs", value: 180 },
  { macro: "Protein", value: 30 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function MacroChart() {
  return (
    <div className="macroChart">
      <PieChart width={600} height={600}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          cx={300}
          cy={300}
          outerRadius={180}
          fill="#8884d8"
          label
        />
        <div>{data01.macro}</div>
        <Tooltip />
      </PieChart>
    </div>
  );
}
