const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.user = this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.bid_order = this.belongsTo(models.Order, {
        foreignKey: 'bid_order_id',
      });
      this.ask_order = this.belongsTo(models.Order, {
        foreignKey: 'ask_order_id',
      });
    }
  }
  Transaction.init(
    {
      user_id: DataTypes.INTEGER,
      bid_order_id: DataTypes.INTEGER,
      ask_order_id: DataTypes.INTEGER,
      qty: DataTypes.STRING,
      price: DataTypes.STRING,
      total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Transaction',
    }
  );
  return Transaction;
};
