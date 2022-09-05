import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Weight from "./Weight";
import Date from "./Date";

const WeightIndex = () => {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/myweight/logs`)
      .then((response) => {
        setWeights(response.data.payload);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h2 className="grid place-items-center text-5xl">Weight Logs</h2>
      <br></br>
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
              Weight
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="bg-white border-b ">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {weights.map((weight) => {
                return <Date key={weight.id} weight={weight} />;
              })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {weights.map((weight) => {
                return <Weight key={weight.id} weight={weight} />;
              })}
            </td>
          </tr>
        </tbody>
      </table>
      <button className="button">
        <Link to="/myweight">Back</Link>
      </button>
    </div>
  );
};

export default WeightIndex;
