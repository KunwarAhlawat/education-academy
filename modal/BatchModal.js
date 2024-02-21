const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect'); // replace with your actual connection instance
 
const BatchModal = sequelize.define('Batch', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID, // Use UUID for primary key
    // defaultValue: DataTypes.UUIDV4, // Generate a UUID for new records
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT, // Use TEXT for longer strings
  },
   
  totalLectures: {
    type: DataTypes.STRING,  
  },
}, {
  tableName: 'batches', // Specify the table name explicitly
  timestamps: true, // Sequelize will automatically add createdAt and updatedAt timestamps
  createdAt: 'createdAt', // Customize the names of the timestamp columns
  updatedAt: 'updatedAt',
});

module.exports = BatchModal;
