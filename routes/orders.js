const express = require('express');

const router = express.Router();
const response = require('../helpers/response');

/* GET orders */
router.get('/', (req, res, next) => {
  res.json(response.json('Orders found.', req.body));
});

/* POST orders */
router.post('/', (req, res, next) => {
  res.json(response.json('Order created.', req.body));
});

/* DELETE orders */
router.delete('/', (req, res, next) => {
  res.json(response.json('Order cancelled.', req.body));
});

module.exports = router;
