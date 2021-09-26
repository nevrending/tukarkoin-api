const express = require('express');

const router = express.Router();
const response = require('../helpers/response');

/* GET bid book */
router.get('/bid', (req, res, next) => {
  res.json(response.json('Bid Orders found.', req.body));
});

/* GET ask book */
router.get('/ask', (req, res, next) => {
  res.json(response.json('Ask Orders found.', req.body));
});

module.exports = router;
