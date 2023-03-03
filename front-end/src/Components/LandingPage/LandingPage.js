import React from "react";
import Community from "./Community";
import ExerciseCards from "./ExerciseCards";
import Grid from "./Grid";
import LandingComponent from "./LandingComponent";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <LandingComponent />
      <ExerciseCards />
      <Grid />
      <Community />
    </div>
  );
}
