import { Link } from "react-router-dom";

function Food({ food }) {
  return (
    <div className="Card">
      <Link to={`/myfoods/${food.id}`}>
        <h4>{food.name}</h4>
      </Link>
    </div>
  );
}

export default Food;
