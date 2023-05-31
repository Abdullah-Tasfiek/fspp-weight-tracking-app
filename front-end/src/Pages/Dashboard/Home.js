import CalculateWeights from "../../Components/Dashboard/CalculateWeights";
import MacroChart from "../../Components/Dashboard/MacroChart";
import DailySummary from "../../Components/Dashboard/DailySummary";

const Home = () => {
  return (
    <div className="Home">
      <CalculateWeights />
      <DailySummary />
      <MacroChart />
    </div>
  );
};

export default Home;
