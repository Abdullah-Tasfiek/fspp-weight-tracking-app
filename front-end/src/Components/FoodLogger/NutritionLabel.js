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
          <div className="nutritionLabelBackground__container__subHeading__divider__top"></div>
          <div className="nutritionLabelBackground__container__subHeading__serving">
            Amount Per Serving
          </div>
          <table className="nutritionLabelBackground__container__subHeading__calories">
            <tbody>
              <tr>
                <td className="font-bold">Calories</td>
                <td className="font-bold text-right">1774</td>
              </tr>
            </tbody>
          </table>
          <div className="nutritionLabelBackground__container__subHeading__divider__bottom"></div>
          <div className="nutritionLabelBackground__container__subHeading__end">
            % Daily Value*
          </div>
        </div>
        <div className="nutritionLabelBackground__container__body">
          <table className="nutritionLabelBackground__container__body__table">
            <tbody className="nutritionLabelBackground__container__body__table__body">
              <tr>
                <td>
                  <span className="font-bold">Total Fat</span> 18.3 g
                </td>
                <td className="font-bold text-right">28 %</td>
              </tr>
            </tbody>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Saturated Fat 2 g</td>
              <td className="font-bold text-right">10 %</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Trans Fat 0 g</td>
              {/* <td className="font-bold text-right">10%</td> */}
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td>
                <span className="font-bold">Cholestrol</span> 0 mg
              </td>
              <td className="font-bold text-right">0 %</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td>
                <span className="font-bold">Sodium</span> 70 mg
              </td>
              <td className="font-bold text-right">3 %</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td>
                <span className="font-bold">Total Carbohydrates</span> 333.2 g
              </td>
              <td className="font-bold text-right">111 %</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Dietary Fiber 34.6 g</td>
              <td className="font-bold text-right">138 %</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Total Sugars 30.3 g</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Includes - Added Sugars</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td>
                <span className="font-bold">Protein</span> 71 g
              </td>
              <td className="font-bold text-right">142 %</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Vitamin D 0 µg</td>
              <td className="font-bold text-right">0%</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Calcium 179.1 mg</td>
              <td className="font-bold text-right">18%</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Iron 13.8 mg</td>
              <td className="font-bold text-right">77 %</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Potassium 2203.2 mg</td>
              <td className="font-bold text-right">47 %</td>
            </tr>
          </table>
        </div>
        <div className="nutritionLabelBackground__container__footer">
          *Percent Daily Values are based on a 2000 calorie diet
        </div>
      </div>
    </div>
  );
}
