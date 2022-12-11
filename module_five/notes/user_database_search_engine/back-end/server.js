// Create imports for required modules and files
const express = require('express');
const morgan = require('morgan');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { default: mongoose } = require('mongoose');
const App = express();

// Middleware for every request
App.use(express.json());
App.use(morgan('dev'));

// Connect to the Database
const uri = "mongodb://localhost:27017/userdatabase"
mongoose.set('strictQuery', false);
mongoose.connect(uri);

// Routes
App.use('/users', require("./routes/userRouter.js"));

// Error Handler
App.use((err, req, res, next) => {
    console.log(err);
    return res.status(404).send({errMsg: err.message});
});

// Server listening
const port = process.env.PORT || 5000;
App.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});