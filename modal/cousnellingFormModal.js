const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect'); // Replace with your actual Sequelize instance

const cousnellingFormModal = sequelize.define('counsellingForm', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email : {
    type : DataTypes.STRING,
    allowNull: false,
    unique : true
  },
  mobileNo: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATE,
  },
  gender: {
    type: DataTypes.STRING,
  },
  hostel: {
    type: DataTypes.STRING,
  },
  fatherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  motherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bloodGroup: {
    type: DataTypes.STRING,
  },
  parentNo: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  permanentAddress: {
    type: DataTypes.STRING,
  },
  guardian: {
    type: DataTypes.STRING,
  },
  guardianRelationship: {
    type: DataTypes.STRING,
  },
  guardianMobile: {
    type: DataTypes.STRING(20),
  },
  guardianAddress: {
    type: DataTypes.STRING,
  },
  programApplied: {
    type: DataTypes.STRING,
  },
  entranceApplied: {
    type: DataTypes.DATE,
  },
  subjectApplied: {
    type: DataTypes.STRING,
  },
  reference: {
    type: DataTypes.STRING,
  },
  submitDate: {
    type: DataTypes.DATE,
  },
  declaration: {
    type: DataTypes.STRING, 
  },
}, {
  // Other model options go here
});

// Sync the model with the database (create the table)
//cousnellingFormModal.sync({ force: true }); // Set force to true to drop and re-create the table if it already exists

module.exports = cousnellingFormModal;
