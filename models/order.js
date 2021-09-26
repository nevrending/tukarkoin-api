const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      this.user = this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      type: DataTypes.STRING,
      qty: DataTypes.STRING,
      qty_remaining: DataTypes.STRING,
      price: DataTypes.STRING,
      total: DataTypes.STRING,
      fee: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
