const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

// set up fields and rules for "Tag" model - https://sequelize.org/v5/manual/data-types.html & https://sequelize.org/v5/manual/models-definition.html !!!
Tag.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
  
      tag_name: {
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
