// Require express
const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')
const path=require("path")

// Require connectDB
const connectDB = require('./config/connectDB');

// Init express
const app = express();

// Middleware
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
// Set EJS as templating engine 
//app.set("view engine", "ejs");

// connectDB
connectDB();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/api/sport', require ('./routes/user'));
app.use('/api/article', require ('./routes/article'));
app.use('/api/profile', require ('./routes/profile'));

// Create port
const port = process.env.PORT || 5000;
// Launch the serveer
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);