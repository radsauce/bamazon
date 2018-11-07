module.exports = (sequelize, DataTypes) => 
  sequelize.define('products', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: DataTypes.STRING,
    department_name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock_quantity: DataTypes.INTEGER,
  })
