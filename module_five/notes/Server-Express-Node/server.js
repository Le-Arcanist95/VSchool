const express = require("express");
const app = express();
const port = process.env.PORT || 4321;

// Middleware (for every request)
app.use(express.json()); // Looks for a request body, and turns it into 'req.body'

// Routes
app.use( '/users', require( './routes/userRouter.js' ));
app.use( '/pets', require( './routes/petRouter.js' ));

// Server listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});