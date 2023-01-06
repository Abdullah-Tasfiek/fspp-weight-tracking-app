import Visuals from "../Components_Weight/WeightVisuals";
import CalculateWeights from "../Components_Weight/CalculateWeights";

const Home = () => {
  return (
    <div className="form">
      <CalculateWeights />
      <Visuals />
    </div>
  );
};

export default Home;
