// Require express
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')

// Require connectDB
const connectDB = require('./config/connectDB');

// Init express
const app = express();

// Middleware
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
// Set EJS as templating engine 
app.set("view engine", "ejs");

// connectDB
connectDB();








app.use('/', require ('./routes/image.js'));
app.use('/api/sport', require ('./routes/user.js'));
app.use('/api/article', require ('./routes/article.js'));
app.use('/api/profile', require ('./routes/profile'));

// Create port
const port = process.env.PORT || 5000;
// Launch the serveer
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);