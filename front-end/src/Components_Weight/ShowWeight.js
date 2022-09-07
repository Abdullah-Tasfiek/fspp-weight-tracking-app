import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowWeight = () => {
  const [weights, setWeights] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/myweight/logs/${id}`).then((response) => {
      setWeights(response.data.payload);
    });
  }, [id, navigate, API]);

  const deleteWeight = () => {
    axios
      .delete(`${API}/myweight/logs/${id}`)
      .then(() => {
        navigate(`/myweight/logs`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteWeight();
  };

  const { date, current_weight } = weights;
  return (
    <div>
      <div className="text-2xl">
        <span className="underline">Date:</span> {date}
        <br></br>
        <br></br>
        <span className="underline">Weight:</span> {current_weight} lbs
        <br></br>
        <br></br>
      </div>

      <br />
      <Link to={"/myweight/logs"}>
        <button className="button" href="/myweight/logs">
          Back to Logs
        </button>
      </Link>
      <br />
      <Link to={`/myweight/logs/${id}/edit`}>
        <button className="button">Edit Weight Log</button>
      </Link>
      <br></br>
      <button className="button" id={weights.id} onClick={handleDelete}>
        Delete This Log
      </button>
    </div>
  );
};

export default ShowWeight;
