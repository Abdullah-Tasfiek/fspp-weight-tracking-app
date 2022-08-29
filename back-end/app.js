// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const foodsControllers = require("./controllers/foodsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/myfoods", foodsControllers);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to BetterHealth!");
});

app.get("*", (req, res) => {
  res.status(404).send("This route doesn't exist");
});

// EXPORT
module.exports = app;