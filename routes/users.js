const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const jwt = require('jsonwebtoken');
const response = require('../helpers/response');
const models = require('../models/index');

const { User } = models;

/* POST login */
router.post('/login', async (req, res, next) => {
  try {
    // get inputs
    const { email, password } = req.body;

    // validate inputs
    if (!(email && password)) {
      res.status(400).json(response.json('All inputs are required.'));
    }

    // check if user exists and password is correct
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      // generate token
      const token = await jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET_KEY,
        { algorithm: 'HS256', expiresIn: '15m' }
      );

      // save new token
      user.token = token;
      user.save();

      // return user object without password hash
      user.password = null;
      res.json(response.json('Login success.', user));
    } else {
      res.status(400).json(response.json('Invalid credentials.', null));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

/* POST register */
router.post('/register', async (req, res, next) => {
  try {
    // get inputs
    const { email, password, first_name, last_name } = req.body;

    // validate inputs
    if (!(email && password && first_name && last_name)) {
      res.status(400).json(response.json('All inputs are required.'));
    }

    // check if user exists
    let user = await User.findOne({ where: { email } });
    if (user) {
      // email has been used
      res.status(409).json(response.json('This email has been registered.'));
    } else {
      // generate password hash; 8 is the salt length
      const hash = await bcrypt.hash(password, 8);

      // save new user
      user = await User.create({
        first_name,
        last_name,
        email,
        password: hash,
      });

      // return user object without password hash
      user.password = null;
      res.status(201).json(response.json('Register success.', user));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

/* GET user details */
router.get('/', async (req, res, next) => {
  try {
    // get authenticated user id
    const { id } = req.user;

    // retrieve user from DB
    const user = await User.findOne({ where: { id } });
    if (user) {
      // return user object without password hash
      user.password = null;
      res.json(response.json('User found.', user));
    } else {
      res.status(404).json(response.json('User not found.', null));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).json(response.json('Sorry! Something went wrong.', null));
  }
});

module.exports = router;
