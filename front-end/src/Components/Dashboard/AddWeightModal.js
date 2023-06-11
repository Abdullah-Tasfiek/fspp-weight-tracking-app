import React from "react";
import "./AddWeightModal.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function AddWeightModal({ closeWeightModal }) {
  const navigate = useNavigate();
  const [weight, setWeight] = useState({
    date: "",
    current_weight: 0,
  });

  const handleTextChange = (event) => {
    setWeight({ ...weight, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/myweight`, weight)
      .then((res) => {
        navigate(`/home`);
      })
      .catch((err) => {
        console.warn(err);
      });
    alert("We successfully added your weight!");

    closeWeightModal(false)
  };

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
        <form onSubmit={handleSubmit} className="modalWeightBackground__container__body">
          <div className="modalWeightBackground__container__body__label">
            <label htmlFor="date">Date:</label>{" "}
            <input
              type="text"
              name="date"
              onChange={handleTextChange}
              id="date"
              autoComplete="off"
              className="addWeightInput"
            ></input>
          </div>
          <div className="modalWeightBackground__container__body__label">
            <label htmlFor="current_weight">Weight:</label>{" "}
            <input
              type="number"
              name="current-weight-count"
              onChange={handleTextChange}
              id="current_weight"
              className="addWeightInput"
            ></input>
          </div>
        </form>
        <div className="modalWeightBackground__container__footer">
          <button onClick={handleSubmit} className="modalWeightBackground__container__footer__btn">
            Add Weight
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWeightModal;
