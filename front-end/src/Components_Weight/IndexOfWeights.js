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
      <h2>Weight Logs</h2>
      <section>
        <article className="Logs">
          <h3>Date</h3>
          <div className="card">
            {weights.map((weight) => {
              return <Date key={weight.id} weight={weight} />;
            })}
          </div>
          <h3>Weight</h3>
          <div className="card">
            {weights.map((weight) => {
              return <Weight key={weight.id} weight={weight} />;
            })}
          </div>
        </article>
      </section>
      <button className="button">
        <Link to="/myweight">Back</Link>
      </button>
    </div>
  );
};

export default WeightIndex;
