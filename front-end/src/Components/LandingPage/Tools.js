import React from "react";
import "./Tools.scss";

export default function Tools() {
  return (
    <div className="ToolCards">
      <div>
        <div className="toolsCards__title">The Tools for Your Goals</div>
        <div className="toolsCards__title__sub">
          <div className="toolsCards__title__subsection">
            Trying to lose weight, tone up, lower your BMI, or invest in your
            overall health? We give you the right features to get there.
          </div>
        </div>
      </div>
      <div className="toolCards">
        <div class="toolCard">
          <div class="toolCard__image">
            <img
              class="image"
              src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
            />
          </div>
          <div class="toolCard__body">
            <div class="toolCard__heading">
              <div>Learn. Track. Improve.</div>
            </div>
            <div class="toolCard__divider"></div>
            <div class="toolCard__details">
              <div>
                Keeping a weight and food diary helps you understand your habits
                and increases your likelihood of hitting your goals.
              </div>
            </div>
          </div>
        </div>
        <div class="toolCard">
          <div class="toolCard__image">
            <img
              class="image"
              src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
            />
          </div>
          <div class="toolCard__body">
            <div class="toolCard__heading">
              <div>Logging Simplified.</div>
            </div>
            <div class="toolCard__divider"></div>
            <div class="toolCard__details">
              <div>
                Scan barcodes, save foods, and use Quick Tools for fast and easy
                nutrition tracking!
              </div>
            </div>
          </div>
        </div>
        <div class="toolCard">
          <div class="toolCard__image">
            <img
              class="image"
              src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
            />
          </div>
          <div class="toolCard__body">
            <div class="toolCard__heading">
              <div>Motivation.</div>
            </div>
            <div class="toolCard__divider"></div>
            <div class="toolCard__details">
              <div>Don't give up! Notice your progress and use BetterHealth™ to better your health!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
