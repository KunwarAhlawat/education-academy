const express = require("express")
const setCommonData = require("./middlewares/dataMiddleware")
const session = require('express-session');
const ejs = require("ejs")
const path = require("path")

const app = express()

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
const notFoundRoute = require("./routes/notFoundRoute")



app.use("/" , indexRoute)
app.use("/" , courseRoute)
app.use("/" , courseViewRoute)
app.use('/', facultyRoute);
app.use('/', adminRoute);
app.use('/', aboutRoute);
app.use('/', loginRoute);
app.use('/', counselingRoute);
app.use('/admin', courseAdminRoute);

app.use('/', contactRoute);

app.use("/" , notFoundRoute)

const port = 3000

app.listen(port , ()=>{
    console.log(`Server is running at ${port}`)
})