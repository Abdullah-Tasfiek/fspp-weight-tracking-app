import React from "react";
import data from "../../data/edamam.json";
import "./NutritionLabel.scss";

export default function NutritionLabel({ loading }) {
  return (
    <div className="nutritionLabelBackground">
      <div className="nutritionLabelBackground__container">
        <div className="nutritionLabelBackground__container__heading">
          Nutrition Facts
        </div>
        <div className="nutritionLabelBackground__container__subHeading">
          <div className="nutritionLabelBackground__container__subHeading__divider"></div>
          <div>Amount Per Serving</div>
          <div>
            Calories <span>336</span>
          </div>
          <div className="nutritionLabelBackground__container__subHeading__divider"></div>
          <div className="nutritionLabelBackground__container__subHeading__end">
            % Daily Value*
          </div>
        </div>
        <div className="nutritionLabelBackground__container__body">
          <div>
            Total Fat 18.3g <span>28%</span>
          </div>
          <div>
            Saturated Fat 2g <span>10%</span>
          </div>
          <div>Trans Fat 18.3g</div>
          <div>
            Cholestrol <span>0mg</span> <span>0%</span>
          </div>
          <div>
            Sodium <span>70mg</span> <span>0%</span>
          </div>
          <div>
            Total Carbohydrates <span>50g</span> <span>50%</span>
          </div>
          <div>
            Dietary Fiber 6g <span>20%</span>
          </div>
          <div>Total Sugars 30g</div>
          <div>Includes - Added Sugars</div>
          <div>
            Protein 142g<span>80%</span>
          </div>
          <div>
            Vitamin D 0 µg<span>0%</span>
          </div>
          <div>
            Calcium 179.1 mg <span>18%</span>
          </div>
          <div>
            Iron 179.1 mg <span>18%</span>
          </div>
          <div>
            Potassium 179.1 mg <span>18%</span>
          </div>
        </div>
        <div className="nutritionLabelBackground__container__footer">
          *Percent Daily Values are based on a 2000 calorie diet
        </div>
      </div>
    </div>
  );
}
