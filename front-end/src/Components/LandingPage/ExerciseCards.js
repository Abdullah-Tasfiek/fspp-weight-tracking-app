import React from "react";
import "./ExerciseCards.scss";

export default function ExerciseCards() {
  return (
    <div>
      <div className="exerciseCards__title">
        Not sure where to start?
        <div className="exerciseCards__title__subsection">
          Here are some tips to get started!
        </div>
      </div>
      <div className="exerciseCards">
        <div class="exerciseCard">
          <div class="exerciseCard__image">
            <img
              class="image"
              src="https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?b=1&s=170667a&w=0&k=20&c=qSje_x0VFmlmQhQMOMBl3ck2gP0OWm-AJNlOMm-nDNg="
            />
          </div>
          <div class="exerciseCard__body">
            <div class="exerciseCard__heading">
              <div>
                Cardio is an important part of exercise. Not only does it help
                to burn calories, but it drastically improves heart health.
              </div>
            </div>
            <div class="exerciseCard__divider"></div>
            <div class="exerciseCard__details">
              <div>
                <a href="https://health.clevelandclinic.org/the-many-benefits-of-a-cardio-workout/">
                  <span class="key">Benefits of Cardio</span>
                </a>
              </div>
              <div>
                <a href="https://www.everydayhealth.com/fitness/liss-cardio/">
                  <span class="key">Exercies</span>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/watch?v=uBVREI0eJPI">
                  <span class="key">Beginner Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="exerciseCard">
          <div class="exerciseCard__image">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
          <div class="exerciseCard__body">
            <div class="exerciseCard__heading">
              <div>
                If your goal is to build muscle, weight lifting will help you.
                We offer custom beginner weightlifting routines so you don't
                have to look for one!
              </div>
            </div>
            <div class="exerciseCard__divider"></div>
            <div class="exerciseCard__details">
              <div>
                <a href="https://www.hsph.harvard.edu/news/hsph-in-the-news/strength-training-time-benefits/#:~:text=She%20explained%20that%20muscle%2Dstrengthening,blood%20pressure%2C%E2%80%9D%20she%20said.">
                  <span class="key">Benefits of Lifting</span>
                </a>
              </div>
              <div>
                <a href="https://www.healthline.com/health/fitness-exercise/free-weight-exercises#advanced-routine">
                  <span class="key">Exercies</span>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/watch?v=ixkQaZXVQjs">
                  <span class="key">Beginner Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="exerciseCard">
          <div class="exerciseCard__image">
            <img
              class="image"
              src="https://media.istockphoto.com/id/1375039697/photo/healthy-fruits-and-vegetables-salad-recipe.jpg?b=1&s=170667a&w=0&k=20&c=YzWsM-BQitBf9og-RKD9AEVtnzQ79yVeso6gzSNaXF4="
            />
          </div>
          <div class="exerciseCard__body">
            <div class="exerciseCard__heading">
              <div>
                If you are trying to gain or lose weight, tracking how many
                calories you eat is is important. It deterimines wether you will
                lose or gain weight.
              </div>
            </div>
            <div class="exerciseCard__divider"></div>
            <div class="exerciseCard__details">
              <div>
                <a href="https://www.cdc.gov/nutrition/resources-publications/benefits-of-healthy-eating.html">
                  <span class="key">Benefits of Dieting</span>
                </a>
              </div>
              <div>
                <a href="https://www.eatingwell.com/category/4305/weight-loss-meal-plans/">
                  <span class="key">Meal Plans</span>
                </a>
              </div>
              <div>
                <a href="https://tdeecalculator.net/">
                  <span class="key">BMR Calculator</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
