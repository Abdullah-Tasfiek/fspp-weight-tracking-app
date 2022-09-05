import { Link } from "react-router-dom";
function Date({ weight }) {
  return (
    <div className="hover:text-red-800">
      <Link to={`/myweight/logs/${weight.id}`}>
        <h4>{weight.date}</h4>
      </Link>
    </div>
  );
}

export default Date;
