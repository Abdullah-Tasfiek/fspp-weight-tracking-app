import React from "react";
import data from "../../data/edamam.json";
import "./FoodLogs.scss";

function FoodLog() {
  return (
    <div className="foodLogBackground">
      <div className="container">
        <table className="container__table">
          <thead>
            <tr>
              <th>Qty</th>
              <th>Unit</th>
              <th className="container__table__wideColumn">
                Food
              </th>
              <th>Calories</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Piece</td>
              <td className="container__table___wideColumn">
                Apple
              </td>
              <td>52</td>
              <td>100g</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>1</td>
              <td>Piece</td>
              <td className="container__table___wideColumn">
                Apple
              </td>
              <td>52</td>
              <td>100g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodLog;
