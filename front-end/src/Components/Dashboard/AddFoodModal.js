import React from "react";
import "./AddFoodModal.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function AddFoodModal({ closeModal }) {
  const navigate = useNavigate();
  const [food, setFood] = useState({
    date: "",
    name: "",
    description: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
  });

  const handleTextChange = (event) => {
    setFood({ ...food, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/myfoods`, food)
      .then((res) => {
        navigate(`/myfoods`);
      })
      .catch((err) => {
        console.warn(err);
      });
    alert("You've successfully added your food!");

    closeModal(false);
  };

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
        <form>
          <div className="modalBackground__container__body">
            <div className="modalBackground__container__body__label">
              <label htmlFor="date">Date</label>{" "}
              <input
                autoComplete="off"
                type="text"
                name="food-date"
                onChange={handleTextChange}
                id="date"
                className="addFoodInput"
                size={18}
              ></input>
            </div>
            <div className="modalBackground__container__body__label">
              <label htmlFor="name">Name</label>{" "}
              <input
                autoComplete="off"
                type="text"
                name="food-name"
                onChange={handleTextChange}
                id="name"
                className="addFoodInput"
                size={18}
              ></input>
            </div>
            <div className="modalBackground__container__body__label">
              <label htmlFor="calories">Calories</label>
              <input
                size={10}
                type="number"
                name="calorie-count"
                onChange={handleTextChange}
                id="calories"
                className="addFoodInput"
              ></input>
            </div>
            <div className="modalBackground__container__body__label">
              <label htmlFor="protein">Protein</label>{" "}
              <input
                type="number"
                name="protein-count"
                onChange={handleTextChange}
                id="protein"
                className="addFoodInput"
                size={18}
              ></input>
            </div>
            <div className="modalBackground__container__body__label">
              <label htmlFor="carbs">Carbs</label>{" "}
              <input
                type="number"
                name="carb-count"
                onChange={handleTextChange}
                id="carbs"
                className="addFoodInput"
                size={18}
              ></input>
            </div>
            <div className="modalBackground__container__body__label">
              <label htmlFor="fats">Fats</label>
              <input
                type="number"
                name="fat-count"
                onChange={handleTextChange}
                id="fats"
                className="addFoodInput"
                size={18}
              ></input>
            </div>
            <div className="modalBackground__container__body__label">
              <label htmlFor="fiber">Fiber</label>
              <input
                type="number"
                name="fiber-count"
                onChange={handleTextChange}
                id="fibers"
                className="addFoodInput"
                size={18}
              ></input>
            </div>
          </div>
        </form>
        <div className="modalBackground__container__footer">
          <button
            onClick={handleSubmit}
            className="modalBackground__container__footer__btn"
          >
            Add Food
          </button>
        </div>
        <a
          href="/myfoods"
          className="text-blue underline flex justify-start p-1"
        >
          View logs
        </a>
        <a
          href="/myfoods/finder"
          className="text-blue underline flex justify-start p-1"
        >
          Don't know the nutrition facts?
        </a>
      </div>
    </div>
  );
}
