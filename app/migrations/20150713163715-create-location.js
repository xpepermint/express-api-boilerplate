export default {
  up: (migration, DataTypes) => {
    return migration.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {model: 'Users', key: 'id'},
        onDelete: 'CASCADE'
      },
      name: {
        type: DataTypes.STRING,
        unique: true
      },
      description: {
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
    return migration.dropTable('Locations');
  }
};
