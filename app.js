const express = require("express")
const setCommonData = require("./middlewares/dataMiddleware")
const ejs = require("ejs")
const path = require("path")

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended : true}))
app.use(express.json())

// set common data
app.use(setCommonData);

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname, 'views'))


// routes 
const indexRoute = require("./routes/indexRoute")
const courseRoute = require("./routes/courseRoute")
const courseViewRoute = require("./routes/courseViewRoute")
const adminRoute = require('./routes/adminRoute');
const notFoundRoute = require("./routes/notFoundRoute")
const contactRoute = require("./routes/contactRoute")
const aboutRoute = require("./routes/aboutRoute")

const facultyRoute = require('./routes/facultyRoute');



app.use("/" , indexRoute)
app.use("/" , courseRoute)
app.use("/" , courseViewRoute)
app.use('/', facultyRoute);
app.use('/', adminRoute);
app.use('/', aboutRoute);
app.use('/', contactRoute);
app.use("/" , notFoundRoute)

const port = 3000

app.listen(port , ()=>{
    console.log(`Server is running at ${port}`)
})