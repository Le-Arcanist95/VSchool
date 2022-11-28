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
        res.send(newUser);
    });   

userRouter.route('/:userId')
    .get((req, res) => {
        res.send(users.find(user => user._id === req.params.userId))
    })
    .put((req, res) => {
        const userId = req.params.userId;
        const userIndex = users.findIndex(user => user._id === userId);
        const updatedUser = Object.assign(users[userIndex], req.body);
        res.send(updatedUser);
    })
    .delete((req, res) => {
        const userId = req.params.userId;
        const userIndex = users.findIndex(user => user._id === userId);
        users.splice(userIndex, 1)
        res.send('Successfully deleted the selected user.')
    });

userRouter.get('/search', (req, res) => {
    const query = req.query;
    let filteredUsers = [];
    
    function filter(query) {
        if(query.name) {
            return filteredUsers = users.filter(item => item.name === query.name);
        } 
        else if (query.age) {
            return filteredUsers = users.filter(item => item.age === query.age);
        } 
        else if (query._id) {
            return filteredUsers = users.filter(item => item._id == query._id)
        };
    };
    filter(query);

    res.send(filteredUsers)
});

module.exports = userRouter;