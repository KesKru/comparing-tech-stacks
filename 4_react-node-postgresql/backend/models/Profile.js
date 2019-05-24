module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    field1: {
      type: DataTypes.STRING
    },
    field2: {
      type: DataTypes.STRING
    },
    field3: {
      type: DataTypes.STRING
    }
  });
  Profile.associate = function(models) {
    Profile.belongsTo(models.User, { onDelete: 'cascade' });
  };

  return Profile;
};
