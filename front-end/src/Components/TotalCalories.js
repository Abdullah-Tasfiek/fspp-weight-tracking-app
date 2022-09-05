function Sum({ foods }) {
  let totalCaloriesConsumed = 0;
  return (
    <div className="Card">
      {foods.map((food) => {
        totalCaloriesConsumed += parseInt(food.calories);
      })}
      <h2 className="text-4xl">
        Total Calories Consumed: {totalCaloriesConsumed}
      </h2>
    </div>
  );
}

export default Sum;
