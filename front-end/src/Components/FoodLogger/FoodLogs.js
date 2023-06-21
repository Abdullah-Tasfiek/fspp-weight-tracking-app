import React from "react";
import data from "../../data/edamam.json";
import "./FoodLogs.scss";
import Log from "./Log";

function FoodLog() {
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
              <th>Weight</th>
            </tr>
          </thead>
          <Log data={data} />
        </table>
      </div>
    </div>
  );
}

export default FoodLog;
