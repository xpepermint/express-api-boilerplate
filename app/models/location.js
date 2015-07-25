export default function(sequelize, DataTypes) {
  return sequelize.define('Location', {
    userId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: '',
      unique: {msg: 'must be unique'},
      validate: {
        notEmpty: {msg: 'is required'}
      }
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        notEmpty: {msg: 'is required'}
      }
    }
  }, {
    classMethods: {associate}
  });
};

function associate(models) {
  models.Location.belongsTo(models.User, {foreignKey: 'userId'});
}
