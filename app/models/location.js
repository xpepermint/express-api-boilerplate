export default function(sequelize, DataTypes) {

  let Location = sequelize.define('Location', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
  }, {});

  return Location;
};
