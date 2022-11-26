const express = require('express');
const middlewareFunction = require('./middleware');
const app = express();

app.use(express.json());

const randomObject = {
    thingOne: "blue",
    thingTwo: "yellow",
    thingThree: "green"
};

app.use(middlewareFunction)

app.get('/', (req, res) => {
    res.send(randomObject);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});