require('dotenv').config();
// .env file is ignored and contains the login creds

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3301,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;


