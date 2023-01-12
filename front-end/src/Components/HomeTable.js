import React from "react";
import DailySummary from "./DailySummary";


export default function HomeTable() {
  return (
    <div>
      <div className="bg-navy">
        <h2 className="font-fonts text-2xl text-white">Your Daily Summary</h2>
      </div>
      <DailySummary />
    </div>
  );
}
