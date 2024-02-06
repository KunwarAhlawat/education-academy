const Sequelize = require("sequelize");

 
const sequelize = new Sequelize("educationacademy", "deepak", "Education@123", {
  dialect: "mysql",
  host: "127.0.0.1",
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;

  