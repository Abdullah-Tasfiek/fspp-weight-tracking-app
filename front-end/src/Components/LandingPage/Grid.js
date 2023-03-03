import React from "react";
import "./Grid.scss";

export default function Grid() {
  return (
    <div>
      <div className="grid">
        <div className="grid__container">
          <div className="grid__container__a">
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
              src="https://media.istockphoto.com/id/1375039697/photo/healthy-fruits-and-vegetables-salad-recipe.jpg?b=1&s=170667a&w=0&k=20&c=YzWsM-BQitBf9og-RKD9AEVtnzQ79yVeso6gzSNaXF4="
            />
          </div>
          <div className="grid__container__b">
            <div className="grid__container__b__title">Workout Videos</div>
            <div className="grid__container__b__body">
              Exercise with certified personal trainers whether you're at home
              or on the road.
            </div>
            <a href="" className="grid__container__b__href">
              Find a Workout
            </a>
            <img
              className="grid__container__b__image"
              src="https://media.istockphoto.com/id/1375039697/photo/healthy-fruits-and-vegetables-salad-recipe.jpg?b=1&s=170667a&w=0&k=20&c=YzWsM-BQitBf9og-RKD9AEVtnzQ79yVeso6gzSNaXF4="
            />
          </div>
          <div className="grid__container__c">
            <div className="grid__container__c__title">Wellness Articles</div>
            <div className="grid__container__c__body">
              Research-backed articles to help you care for your body and mind.
            </div>
            <a href="" className="grid__container__c__href">
              Learn from Experts
            </a>
            <img
              className="grid__container__c__image"
              src="https://media.istockphoto.com/id/1375039697/photo/healthy-fruits-and-vegetables-salad-recipe.jpg?b=1&s=170667a&w=0&k=20&c=YzWsM-BQitBf9og-RKD9AEVtnzQ79yVeso6gzSNaXF4="
            />
          </div>
          <div className="grid__container__d">
            <div className="grid__container__d__title">Healthy Recipes</div>
            <div className="grid__container__d__body">
              Fuel your day with recipes by Registered Dietitians and
              professional chefs.
            </div>
            <a href="" className="grid__container__d__href">
              Find a Recipe
            </a>
            <img
              className="grid__container__d__image"
              src="https://media.istockphoto.com/id/1375039697/photo/healthy-fruits-and-vegetables-salad-recipe.jpg?b=1&s=170667a&w=0&k=20&c=YzWsM-BQitBf9og-RKD9AEVtnzQ79yVeso6gzSNaXF4="
            />
          </div>
        </div>
      </div>
    </div>
  );
}
