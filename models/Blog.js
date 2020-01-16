const Sequelize = require("sequelize");
const db = require("../config/database");

const Gig = db.define("blog", {
  title: {
    type: Sequelize.STRING
  },
  keywords: {
    type: Sequelize.STRING
  },
  description_field: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
});

module.exports = Gig;
