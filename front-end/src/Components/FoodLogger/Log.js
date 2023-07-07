import React from "react";
import "./Log.scss";

function Log({ foodData }) {
  if (!foodData || !foodData.ingredients || !foodData.ingredients[0].parsed) {
    return <p>No data available</p>;
  }
  return (
    <tbody>
      <tr>
        <td>{foodData.ingredients[0].parsed[0].quantity}</td>
        <td>{foodData.ingredients[0].parsed[0].measure}</td>
        <td colSpan={3} className="wideColumn">
          {foodData.ingredients[0].text}
        </td>
        <td>{foodData.calories}</td>
      </tr>
    </tbody>
  );
}

export default Log;
