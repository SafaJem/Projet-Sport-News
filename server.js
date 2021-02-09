// Require express
const express = require('express');

// Require connectDB
const connectDB = require('./config/connectDB');

// Init express
const app = express();

// Middleware
app.use(express.json());

// connectDB
connectDB();

// Use routes
app.use('/api/sport', require ('./routes/user.js'));
app.use('/api/article', require ('./routes/article.js'));
app.use('/api/comment', require ('./routes/comment'));
app.use('/api/profile', require ('./routes/profile'));

// Create port
const port = process.env.PORT || 5000;
// Launch the serveer
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);