const Sequelize  = require('sequelize');
const db = require('../database');

const Projects = db.define("project", {
  name: {
    type: Sequelize.STRING
  }

})

module.exports = Projects;
