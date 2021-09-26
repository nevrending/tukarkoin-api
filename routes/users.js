var express = require('express');
var router = express.Router();
var response = require("../helpers/response");

/* POST login */
router.post("/login", function (req, res, next) {
  res.json(response.json("Login attempt.", req.body));
});

/* POST register */
router.post("/register", function (req, res, next) {
  res.json(response.json("Register attempt.", req.body));
});

/* GET user details */
router.get("/", function (req, res, next) {
  res.json(response.json("User found.", req.body));
});

module.exports = router;
