// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize "Product" model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for "Product" model - https://sequelize.org/v5/manual/data-types.html & https://sequelize.org/v5/manual/models-definition.html !!!
Product.init(
  {
    product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true // Validates that the value is a decimal
      }
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Sets the default value to 10
      validate: { 
        isNumeric: true // Forces the entry to be numeric
      }
    },

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category', // This is a reference to another model
        key: 'id' // This is the column name of the referenced model
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
