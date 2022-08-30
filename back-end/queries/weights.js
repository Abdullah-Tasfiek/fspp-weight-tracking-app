const db = require("../db/dbConfig.js");

const getAllWeights = async () => {
  try {
    const allLogs = await db.any("SELECT * FROM weights");
    return allLogs;
  } catch (error) {
    return error;
  }
};

const getWeight = async (id) => {
  try {
    const oneLog = await db.one("SELECT * FROM weights WHERE id=$1", id);
    return oneLog;
  } catch (error) {
    return error;
  }
};

const createWeight = async ({
  starting_weight,
  current_weight,
  goal_weight,
}) => {
  try {
    const newLog = await db.one(
      "INSERT INTO weights (starting_weight, current_weight, goal_weight) VALUES($1, $2, $3) RETURNING *",
      [starting_weight, current_weight, goal_weight]
    );
    return newLog;
  } catch (error) {
    return error;
  }
};

const updateWeight = async (
  id,
  { starting_weight, current_weight, goal_weight, ...otherStuff }
) => {
  try {
    const updateLog = await db.one(
      "UPDATE weights SET starting_weight=$1, current_weight=$2, goal_weight=$3 where id=$4 RETURNING *",
      [starting_weight, current_weight, goal_weight, id]
    );
    return updateLog;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteWeight = async (id) => {
  try {
    const oneLog = await db.one(
      "DELETE FROM weights WHERE id=$1 RETURNING *",
      id
    );
    return oneLog;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllWeights,
  getWeight,
  createWeight,
  updateWeight,
  deleteWeight,
};
