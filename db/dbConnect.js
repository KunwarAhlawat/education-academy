const Sequelize = require("sequelize");

// mysql
const sequelize = new Sequelize("educationacademy", "root", "4585", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// const sequelize = new Sequelize({
//   dialect: "sqlite.",
//   storage: "mydatabase.sqlite", // Specify the path to your SQLite file
// });

// module.exports = sequelize;


