const express = require("express");
const foods = express.Router(); //helps us be able to set routes
const db = require("../db/dbConfig");
const {
  getFood,
  deleteFood,
  createFood,
  updateFood,
} = require("../queries/foods");

//INDEX
foods.get("/", async (req, res) => {
  const allFoods = await db.any("SELECT * FROM foods");
  res.json({ payload: allFoods });
});

//SHOW
foods.get("/:id", async (req, res) => {
  const { id } = req.params;
  const food = await getFood(id);
  if (food.id) {
    res.json({ success: true, payload: food });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

//CREATE
foods.post("/", async (req, res) => {
  try {
    const food = await createFood(req.body);
    res.json({ success: true, payload: food });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: "server cannot process request" });
  }
});

// // UPDATE
foods.put("/:id", async (req, res) => {
  try {
    const food = await updateFood(req.params.id, req.body);
    res.json({ success: true, payload: food });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// //DELETE
foods.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedFood = await deleteFood(id);
  if (deletedFood) {
    if (deletedFood.id) {
      res.status(200).json({ success: true, payload: deletedFood });
    } else {
      res.status(404).json({ success: false, payload: "Food not found" });
    }
  } else {
    console.error(deletedFood);
    res.status(500).json({ success: false, payload: "server error" });
  }
});

module.exports = foods;
