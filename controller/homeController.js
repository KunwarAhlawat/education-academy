
const courseModel = require("../modal/CourseModal");
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { validationResult } = require('express-validator');

// get all courses
 

      // get all courses with separate pagination for online and offline
const getAllCourses = async (req, res) => {
    try {
        // Assuming you have a valid Sequelize model named 'courseModel'

        // Pagination parameters for all courses
        const page = parseInt(req.query.page) || 1; // Current page (default is 1)
        const pageSize = parseInt(req.query.pageSize) || 3; // Number of items per page (default is 3)

        const offset = (page - 1) * pageSize;

        // Fetching all courses with pagination
        const courses = await courseModel.findAll({
            offset: offset,
            limit: pageSize,
            order: [['createdAt', 'DESC']], // You can customize the ordering as needed
        });

        // Pagination parameters for offline courses
        const offlinePage = parseInt(req.query.offlinePage) || 1; // Current offline page (default is 1)
        const offlinePageSize = parseInt(req.query.offlinePageSize) || 3; // Number of offline items per page (default is 3)

        const offlineOffset = (offlinePage - 1) * offlinePageSize;

        // Fetching offline courses with pagination
        const offlineCourses = await courseModel.findAll({
            where: { studyMode: "Offline" },
            offset: offlineOffset,
            limit: offlinePageSize,
            order: [['createdAt', 'DESC']], // You can customize the ordering as needed
        });

        // Pagination parameters for online courses
        const onlinePage = parseInt(req.query.onlinePage) || 1; // Current online page (default is 1)
        const onlinePageSize = parseInt(req.query.onlinePageSize) || 3; // Number of online items per page (default is 3)

        const onlineOffset = (onlinePage - 1) * onlinePageSize;

        // Fetching online courses with pagination
        const onlineCourses = await courseModel.findAll({
            where: { studyMode: "Online" },
            offset: onlineOffset,
            limit: onlinePageSize,
            order: [['createdAt', 'DESC']], // You can customize the ordering as needed
        });

        // You can include pagination information in the response if needed
        const totalOfflineCount = await courseModel.count({ where: { studyMode: "Offline" } });
        const totalOnlineCount = await courseModel.count({ where: { studyMode: "Online" } });

        return res.render("home", {
            courses,
            onlineCourses,
            offlineCourses,
            offlinePagination: {
                totalItems: totalOfflineCount,
                totalPages: Math.ceil(totalOfflineCount / offlinePageSize),
                currentPage: offlinePage,
                pageSize: offlinePageSize,
            },
            onlinePagination: {
                totalItems: totalOnlineCount,
                totalPages: Math.ceil(totalOnlineCount / onlinePageSize),
                currentPage: onlinePage,
                pageSize: onlinePageSize,
            },
        });

    //   return res.render("home" , { courses: res.locals.courses })
        // return res.json({ "courses": courses });
    } catch (error) {
        console.error("Error fetching courses:", error);
  
        // Check if the error is a Sequelize validation error
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ "error": "Validation error", "details": error.errors });
        }
  
         // Handle other types of errors
        return res.status(500).json({ "error": "Internal server error" });
    }
  };
  


// // get all courses
// const getAllCourses = async (req, res) => {
//     try {
//         // Assuming you have a valid Sequelize model named 'courseModel'
//         const courses = await courseModel.findAll();
//         const OfflineCourses = await courseModel.findAll({where : {studyMode : "Offline" }});
//         const onlineCourses = await courseModel.findAll({where : {studyMode : "Online" }});
  
//         if (courses.length === 0) {
//             return res.render("home" , { "onlineCourses" :onlineCourses , "OfflineCourses" : OfflineCourses })
//         }
  
//         return res.render("home" , { "onlineCourses" :onlineCourses , "OfflineCourses" : OfflineCourses })

//     //   return res.render("home" , { courses: res.locals.courses })
//         // return res.json({ "courses": courses });
//     } catch (error) {
//         console.error("Error fetching courses:", error);
  
//         // Check if the error is a Sequelize validation error
//         if (error.name === 'SequelizeValidationError') {
//             return res.status(400).json({ "error": "Validation error", "details": error.errors });
//         }
  
//          // Handle other types of errors
//         return res.status(500).json({ "error": "Internal server error" });
//     }
//   };
module.exports = {  getAllCourses};
