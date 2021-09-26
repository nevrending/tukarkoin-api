var express = require("express");
var router = express.Router();
var response = require("../helpers/response");

/* GET transactions */
router.get("/", function (req, res, next) {
  res.json(response.json("Transactions found.", null));
});

module.exports = router;
