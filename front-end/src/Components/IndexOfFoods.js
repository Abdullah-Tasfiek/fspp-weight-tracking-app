import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Food from "./Food";
import Calories from "./Calories";
import Date from "./Date";
import TotalCalories from "./TotalCalories";

const FoodIndex = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/myfoods`)
      .then((response) => {
        setFoods(response.data.payload);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log("foods:", foods);

  const clearLogs = (foods) => {
    const API = process.env.REACT_APP_API_URL;
    for (let i = 0; i < foods.length; i++) {
      axios
        .delete(`${API}/myfoods/${foods[i].id}`)
        .then(() => {})
        .catch((err) => {
          console.warn(err);
        });
    }
  };

  let totalCaloriesConsumed = 0;

  return (
    <div>
      <h2 className="text-4xl text-center">Food Logs</h2>
      {foods.map((food, index) => {
        totalCaloriesConsumed += parseInt(food.calories);
        // return <TotalCalories key={index} food={food} index={index} />;
      })}
      <div className="flex justify-center">
        <div className="p-4">
          <div className=" text-center">
            <div>Don't know the nutrition facts of what you ate?</div>
            <div>
              Search for the food and we'll provide the nutritional facts!
            </div>
          </div>
          <div className="p-4">
            <span className="text-xl p-1">🔎</span>
            <input className="border" size={40}></input>
          </div>
        </div>
      </div>
      <div className="text-3xl">
        Total Calories Consumed: {totalCaloriesConsumed}
      </div>
      <Link className="nav-link" to="/myfoods/new">
        <button className="button" href="/myfoods/new">
          Add Food
        </button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="nav-link" to="/myfoods">
        <button
          onClick={() => clearLogs(foods)}
          className="button"
          href="/myfoods"
        >
          Delete All Entries
        </button>
      </Link>
      <table className="table-auto min-w-full text-center">
        <thead className="border-b bg-gray-800">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Date
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Food
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {foods.map((food) => {
                return <Date key={food.id} food={food} />;
              })}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {foods.map((food) => {
                return <Food key={food.id} food={food} />;
              })}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {foods.map((food) => {
                return <Calories key={food.id} food={food} />;
              })}
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/">
        <button className="button">Back</button>
      </Link>
    </div>
  );
};

export default FoodIndex;
