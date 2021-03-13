const { Sequelize } = require('sequelize');
const config = require('../config.json');
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, config.DB_OPTIONS);

let db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require("./User")(sequelize, Sequelize);
module.exports = db