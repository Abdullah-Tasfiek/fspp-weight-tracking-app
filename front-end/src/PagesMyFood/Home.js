import Visuals from "../Components_Weight/WeightVisuals";
import CalculateWeights from "../Components_Weight/CalculateWeights";

const Home = () => {
  return (
    <div className="form">
      <div className="text-2xl grid place-items-center">
        <h1>Welcome to BetterHealth!</h1>
        <h1>Your favorite weight watching app!</h1>
        <h1>Track your meals and weight here!</h1>
      </div>
      <CalculateWeights />
      <Visuals />
    </div>
  );
};

export default Home;
