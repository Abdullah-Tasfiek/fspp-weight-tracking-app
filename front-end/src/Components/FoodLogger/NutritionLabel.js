import React from "react";
import data from "../../data/edamam.json";
import "./NutritionLabel.scss";

export default function NutritionLabel({ loading, foodData }) {
  console.log("Nutrition Label Component:", foodData);
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
                <td className="font-bold text-right">{foodData.calories}</td>
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
                  <span className="font-bold">Total Fat</span>{" "}
                  {foodData.totalNutrients.FAT.quantity.toFixed(1)} g
                </td>
                <td className="font-bold text-right">
                  {Math.ceil(foodData.totalDaily.FAT.quantity)} %
                </td>
              </tr>
            </tbody>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">
                Saturated Fat{" "}
                {foodData.totalNutrients.FASAT.quantity.toFixed(1)} g
              </td>
              <td className="font-bold text-right">
                {Math.ceil(foodData.totalDaily.FASAT.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Trans Fat 0 g</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td>
                <span className="font-bold">Cholestrol</span>{" "}
                {foodData.totalNutrients.CHOLE.quantity.toFixed(1)} mg
              </td>
              <td className="font-bold text-right">
                {Math.ceil(foodData.totalDaily.CHOLE.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td>
                <span className="font-bold">Sodium</span>{" "}
                {foodData.totalNutrients.NA.quantity.toFixed(1)} mg
              </td>
              <td className="font-bold text-right">
                {Math.ceil(foodData.totalDaily.NA.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td>
                <span className="font-bold">Total Carbohydrates</span>{" "}
                {foodData.totalNutrients.CHOCDF.quantity.toFixed(1)} g
              </td>
              <td className="font-bold text-right">
                {Math.ceil(foodData.totalDaily.CHOCDF.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">
                Dietary Fiber{" "}
                {foodData.totalNutrients.FIBTG.quantity.toFixed(1)} g
              </td>
              <td className="font-bold text-right">
                {Math.ceil(foodData.totalDaily.FIBTG.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Total Sugars -</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">Includes - Added Sugars</td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td>
                <span className="font-bold">Protein</span>{" "}
                {foodData.totalNutrients.PROCNT.quantity.toFixed(1)} g
              </td>
              <td className="font-bold text-right">
                {Math.ceil(foodData.totalDaily.PROCNT.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">
                Vitamin D {foodData.totalNutrients.VITD.quantity.toFixed(1)} µg
              </td>
              <td className="font-bold text-right">
                {Math.ceil(foodData.totalDaily.VITD.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">
                Calcium {foodData.totalNutrients.CA.quantity.toFixed(1)} mg
              </td>
              <td className="font-bold text-right">
                {Math.ceil(foodData.totalDaily.CA.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">
                Iron {foodData.totalNutrients.FE.quantity.toFixed(1)} mg
              </td>
              <td className="font-bold text-right">
                {Math.round(foodData.totalDaily.FE.quantity)} %
              </td>
            </tr>
            <tr className="nutritionLabelBackground__container__body__table__body__new">
              <td className="tex-right">
                Potassium {foodData.totalNutrients.K.quantity.toFixed(1)} mg
              </td>
              <td className="font-bold text-right">
                {Math.round(foodData.totalDaily.K.quantity)} %
              </td>
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
