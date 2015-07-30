export default function(sequelize, DataTypes) {
  return sequelize.define('Project', {
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
    }
  }, {
    classMethods: {associate}
  });
};

function associate(models) {
  models.Project.belongsTo(models.User, {foreignKey: 'userId'});
}
