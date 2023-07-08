import React from "react";
import "./Grid.scss";
import { Link } from "react-router-dom";

export default function Grid() {
  return (
    <div>
      <div className="grid">
        <div className="grid__container">
          {/* <div className="grid__container__a">
            <div className="grid__container__a__title">Programs</div>
            <div className="grid__container__a__body">
              Professionally designed programs take the guesswork out of
              exercising.
            </div>
            <a href="" className="grid__container__a__href">
              Browse All Programs
            </a>
            <img
              className="grid__container__a__image"
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-1440.webp"
            />
          </div> */}
          <div className="grid__container__b">
            <div className="grid__container__b__title">Weight Tracker</div>
            <div className="grid__container__b__body">
              Keep daily track of your weight through logging!
            </div>
            <Link to="/home">
              <a href="" className="grid__container__b__href">
                Add your weight!
              </a>
            </Link>
            <img
              className="grid__container__b__image"
              src="https://www.pngall.com/wp-content/uploads/2016/09/Weight-Scale-PNG.png"
            />
          </div>
          {/* <div className="grid__container__c">
            <div className="grid__container__c__title">Wellness Articles</div>
            <div className="grid__container__c__body">
              Research-backed articles to help you care for your body and mind.
            </div>
            <a href="" className="grid__container__c__href">
              Learn from Experts
            </a>
            <img
              className="grid__container__c__image"
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div> */}
          <div className="grid__container__d">
            <div className="grid__container__d__title">
              Food and Calorie Tracker
            </div>
            <div className="grid__container__d__body">
              Keep track of your foods and caloric intake!
            </div>
            <Link to="/home">
              <div className="grid__container__d__href">Add your foods!</div>
            </Link>
            <div className="grid__container__d__imageContainer">
              <img
                className="grid__container__d__image"
                src="https://cdn.pixabay.com/photo/2013/07/12/19/31/scale-154924_960_720.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
