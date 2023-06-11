import React from "react";
import "./AddFoodModal.scss";

export default function AddFoodModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalBackground__container">
        <button
          className="modalBackground__container__closeBtn"
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
        <div className="modalBackground__container__title">
          <h1>Please add your food</h1>
        </div>
        <div className="modalBackground__container__body">
          <div className="modalBackground__container__body__label">
            <label>Name:</label> <input className="addFoodInput" size={18}></input>
          </div>
          <div className="modalBackground__container__body__label">
            <label>Calories:</label> <input className="addFoodInput" size={18}></input>
          </div>
          <div className="modalBackground__container__body__label">
            <label>Protein:</label> <input className="addFoodInput" size={18}></input>
          </div>
          <div className="modalBackground__container__body__label">
            <label>Carbs:</label> <input className="addFoodInput" size={18}></input>
          </div>
          <div className="modalBackground__container__body__label">
            <label>Fats:</label> <input className="addFoodInput" size={18}></input>
          </div>
          <div className="modalBackground__container__body__label">
            <label>Fiber:</label> <input className="addFoodInput" size={18}></input>
          </div>
        </div>
        <div className="modalBackground__container__footer">
          <button className="modalBackground__container__footer__btn">
            Add Food
          </button>
        </div>
      </div>
    </div>
  );
}
