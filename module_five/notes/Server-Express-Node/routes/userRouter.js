const express = require('express');
const { v4: uuidv4 } = require('uuid');
const userRouter = express.Router();

//Fake Data
const users = [
    { name: "Harry", age: 63, _id: uuidv4()},
    { name: "Larry", age: 19, _id: uuidv4()},
    { name: "Barry", age: 27, _id: uuidv4()},
    { name: "Cherry", age: 8, _id: uuidv4()},
    { name: "Fairy", age: 999, _id: uuidv4()}
];

//Routes
userRouter.route('/')
    .get((req, res) => {
        res.send(users);
    })
    .post((req, res) => {
        const newUser = req.body;
        newUser._id = uuidv4();
        users.push(newUser);
        res.send(`Successfully added ${req.body.name} to the database.`);
    });


module.exports = userRouter;