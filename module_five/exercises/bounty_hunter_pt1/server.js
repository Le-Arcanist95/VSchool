const express = require('express');
const app = express();
const port = process.env.PORT || 1234;

app.use( '/bounties', require( './routes/bountyRouter.js' ));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});