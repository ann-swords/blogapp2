//Import the modules:
const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000
const app = express()
const passport = require('./lib/passportConfig')
const session = require('express-session')
require('dotenv').config() 

//Initilaize Express Layouts BEFORE THE ROUTES!!!!
const expressLayouts = require('express-ejs-layouts')
//Look into views folder for a file with a name layout.js
app.use(expressLayouts)

app.use(session({
    secret: 'supersecuresecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 604800}
}))
app.use(passport.initialize())
app.use(passport.session())


// Import Routes:
const indexRouter = require("./routes/index")
const articleRouter = require("./routes/articles")
const authorRouter = require("./routes/authors")
const authRouter = require("./routes/auth")

//Mount the routes: Mount--> it's like connecting that route with slash
app.use('/', indexRouter)
app.use('/', articleRouter)
app.use('/', authorRouter)
app.use('/', authRouter)

//For testing purposes only 
app.get("/a", (req,res)=>{
    res.render("home/another")
})


app.listen(PORT, ()=>{
    //using back ticks `` --> Stirng interpolation
    console.log(`Blog app is running on port ${PORT}`)
})

//Ignore the warnings
mongoose.set('strictQuery', false)


// Node.js to look in a folder called views for all the ejs files. (so no need to specify view folder when we call the ejs files.)
app.set("view engine", "ejs")

mongoose.connect(process.env.DB,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            () =>{
                console.log("MongoDB Connected")
            }
)


