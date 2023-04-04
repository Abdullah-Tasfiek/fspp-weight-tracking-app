import HomeTable from "../../Components/Dashboard/HomeTable";
import CalculateWeights from "../../Components/Dashboard/CalculateWeights";
import MacroChart from "../../Components/Dashboard/MacroChart";

const Home = () => {
  return (
    <div className="Home">
      <CalculateWeights />
      <HomeTable />
      <MacroChart />
    </div>
  );
};

export default Home;
