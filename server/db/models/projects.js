const Sequelize  = require('sequelize');
const db = require('../database');

const Projects = db.define("project", {
  name: {
    type: Sequelize.STRING
  },
  imageUrl:{
    type:Sequelize.TEXT,

  },
  description:{
    type:Sequelize.TEXT
  }


})

module.exports = Projects;
