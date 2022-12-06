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

function errorHandler(target) {
    if (!target) {
        const error = new Error("Target was not found.");
        next(error);
    };
};

//Routes
userRouter.route('/')
    .get((req, res, next) => {
        res.status(200).send(users);
    })
    .post((req, res, next) => {
        const newUser = req.body;
        newUser._id = uuidv4();
        users.push(newUser);
        res.status(201).send(newUser);
    });   

userRouter.get('/search', (req, res, next) => {
    const query = req.query;
    let filteredUsers = [];
    
    function filter(query) {
        if (!Object.keys(query).includes("name" || "age" || "_id")) {
            const error = new Error("You must provide a proper query object");
            res.status(500);
            return next(error);
        }
        else if (query.name) {
            return filteredUsers = users.filter(user => user.name === query.name);
        } 
        else if (query.age) {
            return filteredUsers = users.filter(user => user.age === query.age);
        } 
        else if (query._id) {
            return filteredUsers = users.filter(user => user._id == query._id)
        };
    };
    filter(query);

    res.status(200).send(filteredUsers)
});

userRouter.route('/:userId')
    .get((req, res, next) => {
        const userId = req.params.userId
        const foundUser = users.find(user => user._id === userId);
        if (!foundUser) {
            const error = new Error(`User ID #${userId} was not found.`);
            res.status(500);
            return next(error);
        };
        res.status(200).send(foundUser);
    })
    .put((req, res, next) => {
        const userId = req.params.userId;
        const foundUser = users.find(user => user._id === userId);
        const userIndex = users.findIndex(user => user._id === userId);
        if (!foundUser) {
            const error = new Error(`User ID #${userId} could not be updated. It does not exist.`)
            res.status(500)
            return next(error);
        }
        const updatedUser = Object.assign(users[userIndex], req.body);
        res.status(201).send(updatedUser);
    })
    .delete((req, res, next) => {
        const userId = req.params.userId;
        const foundUser = users.find(user => user._id === userId);
        const userIndex = users.findIndex(user => user._id === userId);
        if (!foundUser) {
            const error = newError(`User ID #${userId} could not be deleted. It does not exist.`)
            res.status(404)
            return next(error);
        }
        users.splice(userIndex, 1)
        res.status(200).send('Successfully deleted the selected user.')
    });

module.exports = userRouter;