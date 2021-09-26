const express = require('express');

const router = express.Router();
const response = require('../helpers/response');
const models = require('../models/index');

const { Order } = models;

/* GET bid book */
router.get('/bid', async (req, res, next) => {
  try {
    // get open bid orders
    const orders = await Order.findAll({
      where: { type: 'bid', status: 'open' },
      attributes: { exclude: ['id', 'user_id', 'fee'] },
      order: [['price', 'DESC']],
    });

    res.json(response.json('Bid Orderbook found.', orders));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

/* GET ask book */
router.get('/ask', async (req, res, next) => {
  try {
    // get open ask orders
    const orders = await Order.findAll({
      where: { type: 'ask', status: 'open' },
      attributes: { exclude: ['id', 'user_id', 'fee'] },
      order: [['price', 'ASC']],
    });

    res.json(response.json('Ask Orderbook found.', orders));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

module.exports = router;
