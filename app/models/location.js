export default function(sequelize, DataTypes) {

  let Location = sequelize.define('Location', {
    name: DataTypes.STRING
  }, {});

  return Location;
};
