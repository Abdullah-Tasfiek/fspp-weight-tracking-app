import ShowFood from "../Components/FoodLogs/ShowFood";

function Show() {
  return (
    <div className="grid place-items-center form">
      <h2 className="text-6xl">Food Item: </h2>
      <br></br>
      <ShowFood />
    </div>
  );
}

export default Show;
