const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect'); // replace with your actual Sequelize instance

const studentModel = sequelize.define('Student', {
   name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    courses: {
        type: DataTypes.STRING,
        allowNull: false,
         
    },
    mobileNum: {
        type: DataTypes.STRING(20),
        allowNull: false,
       
    },
}, {
    // Other model options go here
});

// Sync the model with the database (create the table)
 
module.exports = studentModel;
