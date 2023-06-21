import React from "react";
import "./Log.scss";

function Log({ data }) {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Piece</td>
        <td colSpan={3} className="wideColumn">
          Apple
        </td>
        <td>90</td>
        <td>100g</td>
      </tr>
    </tbody>
  );
}

export default Log;
