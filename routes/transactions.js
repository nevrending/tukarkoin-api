const express = require('express');

const router = express.Router();
const response = require('../helpers/response');

/* GET transactions */
router.get('/', (req, res, next) => {
  res.json(response.json('Transactions found.', null));
});

module.exports = router;
