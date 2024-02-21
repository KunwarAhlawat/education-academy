const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect'); // replace with your actual connection instance

const facultyCourseModal = sequelize.define('FatchCourse', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID, // Use UUID for primary key
    // defaultValue: DataTypes.UUIDV4, // Generate a UUID for new records
  },
  facultyId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.UUID,
    allowNull: false,
  } 
  
}, {
  tableName: 'facultycourses', // Specify the table name explicitly
  timestamps: true, // Sequelize will automatically add createdAt and updatedAt timestamps
  createdAt: 'createdAt', // Customize the names of the timestamp columns
  updatedAt: 'updatedAt',
});

module.exports = facultyCourseModal;