import { Link } from "react-router-dom";

function Calories({ food }) {
  return (
    <div className="hover:text-red-800">
      <Link to={`/myfoods/${food.id}`}>
        <h4>{food.calories}</h4>
      </Link>
    </div>
  );
}

export default Calories;
