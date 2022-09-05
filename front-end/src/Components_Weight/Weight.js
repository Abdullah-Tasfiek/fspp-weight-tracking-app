import { Link } from "react-router-dom";

function Weight({ weight }) {
  return (
    <div className="Log">
      <Link to={`/myweight/logs/${weight.id}`}>
        <h4>{weight.current_weight} lbs</h4>
      </Link>
    </div>
  );
}

export default Weight;
