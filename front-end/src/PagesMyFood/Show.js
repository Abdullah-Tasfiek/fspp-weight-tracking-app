import ShowFood from "../Components/ShowFood";

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
