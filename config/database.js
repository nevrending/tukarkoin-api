const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('DB connection has been established successfully.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
