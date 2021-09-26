const express = require('express');

const router = express.Router();
const response = require('../helpers/response');
const models = require('../models/index');

const { Transaction } = models;

/* GET transactions */
router.get('/', async (req, res, next) => {
  try {
    // get transactions
    const transactions = await Transaction.findAll({
      attributes: {
        exclude: ['id', 'user_id', 'bid_order_id', 'ask_order_id'],
      },
    });

    res.json(response.json('Transactions found.', transactions));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

module.exports = router;
