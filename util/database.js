const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_first_app', 'root', 'katakunci', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
