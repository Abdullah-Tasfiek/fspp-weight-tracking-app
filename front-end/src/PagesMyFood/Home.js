import HomeTable from "../Components/HomeTable";
import CalculateWeights from "../Components_Weight/CalculateWeights";
import MacroChart from "../Components/MacroChart";

const Home = () => {
  return (
    <div className="form p-6">
      <CalculateWeights />
      <HomeTable />
      <MacroChart />
    </div>
  );
};

export default Home;
