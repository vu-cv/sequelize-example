module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define("permission", {
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },

    table_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
  });
  return Permission;
};