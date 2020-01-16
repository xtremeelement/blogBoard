const Sequelize = require("sequelize");

module.exports = new Sequelize("blogBoard_db", "root", "root", {
  host: "localhost",
  dialect: "mysql"
});
