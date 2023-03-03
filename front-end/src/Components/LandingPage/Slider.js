import React from "react";
import "./Slider.scss";

export default function Slider() {
  return (
    <div className="slider">
      <div>
        <div className="slider__title">
          Select a
          <span className="slider__title__mainIdea"> Project Template</span>
        </div>
        <div className="slider__body">
          Looking to understand the type of technical work we support? Click
          into our project types below to get ideas for your organization or
          support your project submission
        </div>
      </div>
      <div class="slider__sliderCard">
        <div class="image">
          <img src="https://st3.depositphotos.com/8781404/12807/i/950/depositphotos_128076296-stock-photo-human-hands-working-on-laptop.jpg" />
        </div>

        <div class="slider__sliderCard__info">
          <div class="slider__sliderCard__title">
            Some Title On This Card That Shows Some Data about something
          </div>

          <div class="slider__sliderCard__details">
            <div class="slider__sliderCard__detail">
              <span>Role: </span>
              Role
            </div>
            <div class="slider__sliderCard__detail">
              <span>Skills: </span>
              skills
            </div>

            <div class="slider__sliderCard__timeAgo">2 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
