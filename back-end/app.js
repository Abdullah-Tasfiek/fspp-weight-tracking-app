// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const foodsControllers = require("./controllers/foodsController");
const weightsControllers = require("./controllers/weightsController");
// const bcrypt = require("bcrypt");
// const session = require("express-session");
// const flash = require("express-flash");
// const passport = require("passport");
// const methodOverride = require("method-override");
// const loginControllers = require("./controllers/loginController");
// const initializePassport = require("./passportConfig");
// initializePassport(
//   passport,
//   (email) => users.find((user) => user.email === email),
//   (id) => users.find((user) => user.id === id)
// );
// const users = [];

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/myfoods", foodsControllers);
app.use("/myweight", weightsControllers);
// app.use("/login", loginControllers);
// app.set("view engine", "ejs");
//send input details from our frontend to our server
// app.use(express.urlencoded({ extended: false }));
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
// app.use(methodOverride("_method"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to BetterHealth!");
});

// app.get("/", checkAuthenticated, (req, res) => {
//   res.render("index.ejs", { name: req.user.name });
// });

// app.get("/register", checkNotAuthenticated, (req, res) => {
//   res.render("register.ejs");
// });

// app.get("/login", checkNotAuthenticated, (req, res) => {
//   res.render("login.ejs");
// });

// app.post(
//   "/login",
//   checkNotAuthenticated,
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );

// app.get("/logout", (req, res, next) => {
//   req.logOut(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/login");
//   });
//   req.flash("success_msg", "You have logged out");
// });

// app.get("/", (req, res) => {
//   res.render("index.ejs", { user: req.user.name });
// });

// app.post("/register", checkNotAuthenticated, async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     users.push({
//       id: Date.now().toString(),
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword,
//     });
//     res.redirect("/login");
//   } catch {
//     res.redirect("/register");
//   }
// });

// app.get("/logout", (req, res) => {
//   req.logOut();
//   res.redirect("/login");
// });

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }

//   res.redirect("/login");
// }

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect("/");
//   }
//   next();
// }

app.get("*", (req, res) => {
  res.status(404).send("This route doesn't exist");
});

// EXPORT
module.exports = app;
