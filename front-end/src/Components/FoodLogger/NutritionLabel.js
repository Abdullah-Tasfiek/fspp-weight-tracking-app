import React from "react";
import data from "../../data/edamam.json";
import "./NutritionLabel.scss";

export default function NutritionLabel({ loading, foodData }) {
  if (!foodData) {
    // Handle the case when foodData is undefined or null
    return <p>No data available</p>;
  }

  const { calories, totalNutrients } = foodData;

  if (!calories || !totalNutrients) {
    // Handle the case when any required properties are undefined or null
    return (
      <div className="py-5">
        <div className="font-bold underline text-2xl">Error</div>
        We had a problem analyzing this. Please check the ingredient spelling or
        if you have entered quantities for the ingredients.
      </div>
    );
  }

  return (
    <div className="nutritionLabelBackground">
      <div className="nutritionLabelBackground__container">
        <div className="nutritionLabelBackground__container__heading">
          Nutrition Facts
        </div>
        <div className="nutritionLabelBackground__container__subHeading">
          <div className="nutritionLabelBackground__container__subHeading__divider__top"></div>
          <table className="nutritionLabelBackground__container__subHeading__serving">
            <tbody>
              <tr>
                <td>Amount Per Serving</td>
                <td className="text-right">({Math.floor(foodData.totalWeight)}g)</td>
              </tr>
            </tbody>
          </table>
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
              <td className="tex-right">
                Total Sugars -{" "}
                {foodData.totalNutrients.SUGAR
                  ? foodData.totalNutrients.SUGAR.quantity.toFixed(1)
                  : ""}
              </td>
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
