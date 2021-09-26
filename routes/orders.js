var express = require('express');
var router = express.Router();
var response = require('../helpers/response');

/* GET orders */
router.get('/', function (req, res, next) {
  res.json(response.json('Orders found.', req.body));
});

/* POST orders */
router.post('/', function (req, res, next) {
  res.json(response.json('Order created.', req.body));
});

/* DELETE orders */
router.delete('/', function (req, res, next) {
  res.json(response.json('Order cancelled.', req.body));
});

module.exports = router;
