var express = require('express');
var router = express.Router();
var response = require('../helpers/response');

/* GET bid book */
router.get('/bid', function (req, res, next) {
  res.json(response.json('Bid Orders found.', req.body));
});

/* GET ask book */
router.get('/ask', function (req, res, next) {
  res.json(response.json('Ask Orders found.', req.body));
});

module.exports = router;
