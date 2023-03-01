import React from "react";
import ExerciseCards from "./ExerciseCards";
import LandingComponent from "./LandingComponent";

export default function LandingPage() {
  return (
    <div className="text-2xl grid place-items-center">
      <LandingComponent />
      <ExerciseCards />
    </div>
  );
}
