import Sequelize from 'sequelize';
import fs from 'fs';
import config from '../../config';

let sequelize = new Sequelize(config.databaseName, config.databaseUsername, config.databasePassword, {dialect: 'postgres', native: true});

let db = {};
fs.readdirSync(__dirname).filter((file) => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach((file) => {
  if (file.slice(-3) !== '.js') return;
  let model = sequelize.import(`${__dirname}/${file}`);
  db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) db[modelName].associate(db);
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
