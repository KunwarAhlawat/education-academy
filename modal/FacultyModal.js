const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect'); // replace with your actual connection instance
 
const FacultyModal = sequelize.define('facultydetail', {
  facultyId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID, // Use UUID for primary key
    // defaultValue: DataTypes.UUIDV4, // Generate a UUID for new records
  },
  name: {
    type: DataTypes.STRING,
     
  },
  specialization: {
    type: DataTypes.STRING,
     
  },
  qualification: {
    type: DataTypes.STRING,
     
  },
  experience: {
    type: DataTypes.STRING,
     
  },
  image: {
    type: DataTypes.STRING,
     
  },
  email: {
    type: DataTypes.STRING,
     
  },
  mode: {
    type: DataTypes.STRING,
   
  },
  resume: {
    type: DataTypes.STRING,
   
  },
  contact: {
    type: DataTypes.STRING,
   
  },
  state: {
    type: DataTypes.STRING,
   
  },
  status: {
    type: DataTypes.STRING,
   
  },
  address: {
    type: DataTypes.STRING,
   
  },
  joiningDate: {
    type: DataTypes.DATE,
   
  },
  dob: {
    type: DataTypes.DATE,
   
  },
  salary: {
    type: DataTypes.STRING,
   
  },
  zipcode: {
    type: DataTypes.INTEGER,
   
  } 
}, {
  tableName: 'facultydetails', // Specify the table name explicitly
  timestamps: true, // Sequelize will automatically add createdAt and updatedAt timestamps
  createdAt: 'createdAt', // Customize the names of the timestamp columns
  updatedAt: 'updatedAt',
});

module.exports = FacultyModal;
