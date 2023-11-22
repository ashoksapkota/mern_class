// importing Packages
const dotenv = require('dotenv');
const express = require('express');
const mongoose= require('mongoose');
const connectToDB = require('./database/db');

//making express app
const app = express();


//configuring dotenv
dotenv.config();


//connecting database
connectToDB();

//defining routes
app.use('/api/user', require('./routes/userRoutes'))
//http://localhost:5000/api/user/create

app.use('api/product', require('./routes/productRoutes'))

// hello route
app.get('/hello', (req, res)=>{
    // res.send("This is Hello Route MF")
    res.status(200).json("Hello World!")
})


// defining port
const PORT = process.env.PORT;

// Running the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
} )