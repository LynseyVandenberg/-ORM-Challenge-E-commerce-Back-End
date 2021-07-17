const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// set up fields and rules for "ProductTag" model - https://sequelize.org/v5/manual/data-types.html & https://sequelize.org/v5/manual/models-definition.html
ProductTag.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_id: {
      type: Sequelize.INTEGER,
      model: 'Tag', // This is a reference to another model
      key: 'id' // This is the column name of the referenced model
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
