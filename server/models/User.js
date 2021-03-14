module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  return User;
};