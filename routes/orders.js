const express = require('express');

const router = express.Router();
const response = require('../helpers/response');
const models = require('../models/index');

const { Order } = models;

/* GET orders */
router.get('/', async (req, res, next) => {
  const { id } = req.user;

  try {
    // get user orders
    const orders = await Order.findAll({ where: { user_id: id } });

    res.json(response.json('Orders found.', orders));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

/* POST orders */
router.post('/', async (req, res, next) => {
  try {
    // get current user
    const { id } = req.user;

    // get inputs
    const { type, qty, price } = req.body;

    // validate inputs
    if (!(type && qty && price)) {
      res.status(400).json(response.json('All inputs are required.'));
    }

    // calculate and set Order values
    const qty_remaining = qty;
    const total = Number.parseFloat(qty) * Number.parseFloat(price);
    const fee = 0;
    const status = 'open';

    // save new order
    const order = await Order.create({
      user_id: id,
      type,
      qty,
      qty_remaining,
      price,
      total,
      fee,
      status,
    });

    res.json(response.json('Order created.', order));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

/* DELETE orders */
router.delete('/', async (req, res, next) => {
  try {
    // get current user
    const { id } = req.user;

    // get inputs
    const { order_id } = req.body;

    // validate inputs
    if (!order_id) {
      res.status(400).json(response.json('All inputs are required.'));
    }

    // check if order exists
    const order = await Order.findOne({ where: { id: order_id, user_id: id } });
    if (order) {
      if (order.status === 'cancelled') {
        // this Order has been cancelled
        res.status(400).json(response.json('Order has been cancelled.', order));
      } else {
        // set Order status to cancelled
        order.status = 'cancelled';
        order.save();

        res.json(response.json('Order cancelled.', order));
      }
    } else {
      res.status(404).json(response.json('Order not found.', null));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

module.exports = router;
