const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect'); // replace with your actual Sequelize instance

const purchaseModel = sequelize.define('Purchase', {
        id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      }, 
      orderId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      amount: {
        allowNull: false,
        type: DataTypes.FLOAT,  // Adjust the data type if needed
      },
      studentId: {
        type: DataTypes.STRING,
        allowNull: false,
         
      },
      courseId: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      purchaseId: {
        type: DataTypes.STRING,
        
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      } ,
      paymenetSignature: {
       
        type: DataTypes.STRING,
      } ,
      paymentMethod: {
        
        type: DataTypes.STRING,
      } ,
      paymentDate: {
       
        type: DataTypes.DATE,
      } ,
      createdAt: {
         
        type: DataTypes.DATE
      },
      updatedAt: {
 
        type: DataTypes.DATE
      }
}, {
    // Other model options go here
});

// Sync the model with the database (create the table)
 
module.exports = purchaseModel;
