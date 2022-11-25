const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();

// Middleware (for every request)
app.use(express.json()); // Looks for a request body, and turns it into 'req.body'

// Fake Data
const users = [
    { name: "harry", age: 63, _id: uuidv4()},
    { name: "larry", age: 19, _id: uuidv4()},
    { name: "barry", age: 27, _id: uuidv4()},
    { name: "cherry", age: 8, _id: uuidv4()},
    { name: "fairy", age: 999, _id: uuidv4()}
];

// Routes
app.get('/users', (req, res) => {
    res.send(users);
});
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser._id = uuidv4();
    users.push(newUser);
    res.send(`Successfully added ${req.body.name} to the database.`);
});

// Server listening
app.listen(4321, () => {
    console.log("The server is running on Port 4321");
});