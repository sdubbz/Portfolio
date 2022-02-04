const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost/portfolioDB');

module.exports = db;
