import Sequelize from 'sequelize';
import init from 'sequelize-init'
import config from '../../config';

let sequelize = new Sequelize(config.databaseName, config.databaseUsername, config.databasePassword, {dialect: 'postgres', native: true});
let db = init(sequelize, __dirname, {exclude: ['index.js']});

export default db;
