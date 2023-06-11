import React from "react";
import "./AddWeightModal.scss";

function AddWeightModal({ closeWeightModal }) {
  return (
    <div className="modalWeightBackground">
      <div className="modalWeightBackground__container">
        <button
          className="modalWeightBackground__container__closeBtn"
          onClick={() => {
            closeWeightModal(false);
          }}
        >
          X
        </button>
        <div className="modalWeightBackground__container__title">
          <h1>Please add your weight</h1>
        </div>
        <div className="modalWeightBackground__container__body">
          <div className="modalWeightBackground__container__body__label">
            <label>Date:</label> <input></input>
          </div>
          <div className="modalWeightBackground__container__body__label">
            <label>Weight:</label> <input></input>
          </div>
        </div>
        <div className="modalWeightBackground__container__footer">
          <button className="modalWeightBackground__container__footer__btn">
            Add Weight
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWeightModal;
