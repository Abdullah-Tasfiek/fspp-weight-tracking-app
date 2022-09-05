const express = require("express");
const login = express.Router(); //helps us be able to set routes

//INDEX
login.get("/", async (req, res) => {
  res.json(
    "Welcome to BetterHealth! Your favorite weight watching app! Track your meals and weight all in one place!"
  );
});

module.exports = login;
