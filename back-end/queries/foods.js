const db = require("../db/dbConfig.js");

const getAllFoods = async () => {
  try {
    const allFoods = await db.any("SELECT * FROM foods");
    return allFoods;
  } catch (error) {
    return error;
  }
};

const getFood = async (id) => {
  try {
    const oneFood = await db.one("SELECT * FROM foods WHERE id=$1", id);
    return oneFood;
  } catch (error) {
    return error;
  }
};

const createFood = async ({
  date,
  name,
  description,
  calories,
  protein,
  carbs,
  fats,
  fiber,
}) => {
  try {
    const newFood = await db.one(
      "INSERT INTO foods (date, name, description, calories, protein, carbs, fats, fiber) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [date, name, description, calories, protein, carbs, fats, fiber]
    );
    return newFood;
  } catch (error) {
    return error;
  }
};

const updateFood = async (
  id,
  {
    date,
    name,
    description,
    calories,
    protein,
    carbs,
    fats,
    fiber,
    ...otherStuff
  }
) => {
  try {
    const updateFood = await db.one(
      "UPDATE foods SET date=$1, name=$2, description=$3, calories=$4 , protein=$5, carbs=$6, fats=$7, fiber=$8 where id=$9 RETURNING *",
      [date, name, description, calories, protein, carbs, fats, fiber, id]
    );
    return updateFood;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteFood = async (id) => {
  try {
    const oneFood = await db.one(
      "DELETE FROM foods WHERE id=$1 RETURNING *",
      id
    );
    return oneFood;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
};
