import React from "react";
import data from "../../data/edamam.json";
import "./FoodLogs.scss";
import Log from "./Log";

function FoodLog({ foodData }) {
  console.log("FoodLogs Component:", foodData);
  return (
    <div className="foodLogBackground">
      <div className="foodLogBackground__container">
        <table className="foodLogBackground__container__table">
          <thead>
            <tr>
              <th>Qty</th>
              <th>Unit</th>
              <th
                colSpan={3}
                className="foodLogBackground__container__table__wideColumn"
              >
                Food
              </th>
              <th>Calories </th>
            </tr>
          </thead>
          <Log data={data} foodData={foodData}/>
        </table>
      </div>
    </div>
  );
}

export default FoodLog;
