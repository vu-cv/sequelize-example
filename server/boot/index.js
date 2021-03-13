const { Sequelize } = require('sequelize');
const config = require('../config.json');
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, config.DB_OPTIONS);


module.exports = { sequelize }