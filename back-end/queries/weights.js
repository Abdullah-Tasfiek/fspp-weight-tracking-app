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
  date,
  starting_weight,
  current_weight,
  goal_weight,
}) => {
  try {
    const newLog = await db.one(
      "INSERT INTO weights (date, starting_weight, current_weight, goal_weight) VALUES($1, $2, $3, $4) RETURNING *",
      [date, starting_weight, current_weight, goal_weight]
    );
    return newLog;
  } catch (error) {
    return error;
  }
};

const updateWeight = async (
  id,
  { date, starting_weight, current_weight, goal_weight, ...otherStuff }
) => {
  try {
    const updateLog = await db.one(
      "UPDATE weights SET date=$1, starting_weight=$2, current_weight=$3, goal_weight=$4 where id=$5 RETURNING *",
      [date, starting_weight, current_weight, goal_weight, id]
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
