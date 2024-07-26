const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog", "root", "1234567", {
    host : "localhost",
    dialect : "mysql"
});

module.exports = sequelize;




