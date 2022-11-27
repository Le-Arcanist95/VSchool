const express = require("express");
const app = express();
const morgan = require('morgan');


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

// Routes
app.use( '/users', require( './routes/userRouter.js' ));
app.use( '/pets', require( './routes/petRouter.js' ));

// Server listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});