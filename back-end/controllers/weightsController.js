const express = require("express");
const weights = express.Router(); //helps us be able to set routes
const db = require("../db/dbConfig");
const {
  getWeight,
  deleteWeight,
  createWeight,
  updateWeight,
} = require("../queries/weights");

//INDEX
weights.get("/logs", async (req, res) => {
  const allWeights = await db.any("SELECT * FROM weights");
  res.json({ payload: allWeights });
});

//SHOW
weights.get("/logs/:id", async (req, res) => {
  const { id } = req.params;
  const weight = await getWeight(id);
  if (weight.id) {
    res.json({ success: true, payload: weight });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

//CREATE
weights.post("/", async (req, res) => {
  try {
    const weight = await createWeight(req.body);
    res.json({ success: true, payload: weight });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: "server cannot process request" });
  }
});

// UPDATE
weights.put("/logs/:id", async (req, res) => {
  try {
    const weight = await updateWeight(req.params.id, req.body);
    res.json({ success: true, payload: weight });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE
weights.delete("/logs/:id", async (req, res) => {
  const { id } = req.params;
  const deletedWeight = await deleteWeight(id);
  if (deletedWeight) {
    if (deletedWeight.id) {
      res.status(200).json({ success: true, payload: deletedWeight });
    } else {
      res.status(404).json({ success: false, payload: "Weight not found" });
    }
  } else {
    console.error(deletedWeight);
    res.status(500).json({ success: false, payload: "server error" });
  }
});

module.exports = weights;
