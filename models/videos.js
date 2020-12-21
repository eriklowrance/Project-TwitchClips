module.exports = function (sequelize, DataTypes) {
  const Videos = sequelize.define("Videos", {
    // The email cannot be null, and must be a proper email before creation
    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The password cannot be null
    gameId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streamerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Videos.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Videos.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Videos;
};
