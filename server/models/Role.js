module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("role", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    display_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Role;
};