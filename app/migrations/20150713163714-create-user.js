export default {
  up: (migration, DataTypes) => {
    return migration.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      passwordSalt: {
        type: DataTypes.STRING
      },
      passwordHash: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (migration, DataTypes) => {
    return migration.dropTable('Users');
  }
};
