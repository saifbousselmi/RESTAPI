// Require Express 
const express = require ('express');

// Get instance of Express
const app = express ();

// Get body parser middleware
app.use(express.json());

// Require dotenv
require("dotenv").config();

// Require PORT
const PORT = process.env.PORT || 5002;
// Create server

app.listen(PORT,(err)=>{
    err ? console.log(err)
    : console.log(`server is running on http://127.0.0.1:${PORT}`)
});

// connectDB
const connectDB = require('./config/connectDB');

connectDB()

// Require userRoutes
app.use('/api/users',require('./routes/userRoutes'))