import React from "react";
import Community from "../../Components/LandingPage/Community";
import ExerciseCards from "../../Components/LandingPage/ExerciseCards";
import Grid from "../../Components/LandingPage/Grid";
import LandingComponent from "../../Components/LandingPage/LandingComponent";
import "./LandingPage.scss";
// import Footer from "../../Components/Footer"

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__content">
        <LandingComponent />
        <ExerciseCards />
        <Grid />
        <Community />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
