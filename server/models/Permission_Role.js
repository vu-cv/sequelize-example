module.exports = (sequelize, DataTypes) => {
  const Permission_Role = sequelize.define("permission_role", {
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  });
  return Permission_Role;
};