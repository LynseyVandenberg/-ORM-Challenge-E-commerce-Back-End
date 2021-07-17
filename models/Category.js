// Require the sequelize library
const { Model, DataTypes } = require('sequelize');

// Require the connection to the database (connection.js)
const sequelize = require('../config/connection.js');

// Create a "Category" model - https://sequelize.org/v5/manual/models-definition.html
class Category extends Model {}

Category.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
