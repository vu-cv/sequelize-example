const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config.json');
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, config.DB_OPTIONS);

let db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require("./User")(sequelize, DataTypes);
db.Role = require("./Role")(sequelize, DataTypes);
db.Permission = require("./Permission")(sequelize, DataTypes);
db.Permission_Role = require("./Permission_Role")(sequelize, DataTypes);

db.Role.hasMany(db.User)
db.User.belongsTo(db.Role)

db.Role.belongsToMany(db.Permission, { through: db.Permission_Role })
db.Permission.belongsToMany(db.Role, { through: db.Permission_Role })

module.exports = db