// Middleware to set common data
const data = require("../database/data")
 
const setCommonData = (req, res, next) => {
    res.locals.commonData =  data
    next();
};

 module.exports = setCommonData


 