// Import required modules
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');

// Create instance of Express
const app = express();

// Middleware for every request
app.use(express.json());
app.use(morgan('dev'));

// Database Connections
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/crud-store-db', () => console.log("Connected to the Database."));

// Routes


// Error Handler


// Port and Server Listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});