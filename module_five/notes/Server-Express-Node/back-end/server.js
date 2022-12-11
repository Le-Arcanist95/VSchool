const express = require("express");
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

// Middleware (for every request)
app.use(express.json()); // Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')); // Logs requests to the console


// app.use( '/users', (req, res, next) => {
//     console.log("The middleware was executed.")
//     next()
// })
// app.use( '/users', (req, res, next) => {
//     req.body = { name: "George"}
//     next();
// })
// app.get( '/users', (req, res, next) => {
//     console.log("Get request recieved.");
//     res.send(req.body);
// });

// Connect to DB
const uri = "mongodb+srv://Lev_Arcanist:"
             + encodeURIComponent("p!=Mb6S&B(XBX,b[5S#e") 
             + "@cluster0.l1qvvqg.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(uri, () => console.log("Connected to the Database"));


// Routes
app.use( '/users', require( './routes/userRouter.js' ));
app.use( '/pets', require( './routes/petRouter.js' ));

// Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(404).send({errMsg: err.message});
});

// Server listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});