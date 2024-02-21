const express = require("express")
const setCommonData = require("./middlewares/dataMiddleware")
const courseModel = require("./modal/CourseModal");

const session = require('express-session');
const ejs = require("ejs")
const path = require("path")
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.static('public'))
app.use(express.urlencoded({ extended : false}))
app.use(express.json())

// set common data
app.use(setCommonData);

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname, 'views'))
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, // 1 hour in milliseconds
    },
  }));
  

  app.get('*', async (req, res, next) => {
    try {
       const courses = await courseModel.findAll();
   
      if (courses) {
        res.locals.courses = courses;
         
       } else {
        res.locals.courses = [];
      }
  
      // Call the next middleware or proceed with the response
      next();
    } catch (error) {
      console.error('Error fetching courses:', error);
      // Handle the error, for example, send a 500 Internal Server Error response
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// routes 
const indexRoute = require("./routes/indexRoute")
const courseRoute = require("./routes/courseRoute")
const courseViewRoute = require("./routes/courseViewRoute")
const adminRoute = require('./routes/adminRoute');
const counselingRoute = require('./routes/counselingRoute');

const contactRoute = require("./routes/contactRoute")
const aboutRoute = require("./routes/aboutRoute")
const loginRoute = require('./routes/loginRoute');
const facultyRoute = require('./routes/facultyRoute');



// admin routes
const courseAdminRoute = require('./routes/admin/course');
 const dashboardAdminRoute = require('./routes/admin/dashboard');
const facultyAdminRoute = require('./routes/admin/faculty');
const faqAdminRoute = require('./routes/admin/faq');
const leadAdminRoute = require('./routes/admin/lead');
const purchaseAdminRoute = require('./routes/admin/purchase');
const studentAdminRoute = require('./routes/admin/student');
const batchAdminRoute = require('./routes/admin/batch');
const thanksAdminRoute = require('./routes/admin/thanks');
const orderAdminRoute = require('./routes/admin/createOrder');
 const notFoundRoute = require("./routes/notFoundRoute")



app.use("/" , indexRoute)
app.use("/" , courseRoute)
app.use("/" , courseViewRoute)
app.use('/', facultyRoute);
app.use('/', adminRoute);
app.use('/', aboutRoute);
app.use('/', loginRoute);
app.use('/', counselingRoute);

// admin routes
app.use('/admin', courseAdminRoute);
app.use('/admin', dashboardAdminRoute);
app.use('/admin', facultyAdminRoute);
app.use('/admin', faqAdminRoute);
app.use('/admin', leadAdminRoute);
app.use('/admin', purchaseAdminRoute);
app.use('/admin', studentAdminRoute);
app.use('/admin', batchAdminRoute);
app.use('/admin', thanksAdminRoute);
app.use('/admin', orderAdminRoute);

app.use('/', contactRoute);

app.use("*" , notFoundRoute)

const port = 3000

app.listen(port , ()=>{
    console.log(`Server is running at ${port}`)
})