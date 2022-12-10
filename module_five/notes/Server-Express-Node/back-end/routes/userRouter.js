const express = require('express');
const User = require('../models/user.js');
const userRouter = express.Router();

// Routes
userRouter.route('/')
    .get((req, res, next) => {
        User.find((err, users) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(users);
        });
    })
    .post((req, res, next) => {
        const newUser = new User(req.body)
        newUser.save((err, users) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(newUser);
        });
    });   

    
    userRouter.route('/:userId')
    .get((req, res, next) => {
        User.findById({_id: req.params.userId}, (err, foundUser) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(foundUser);
        })
    })
    .put((req, res, next) => {
        User.findOneAndUpdate(
            {_id: req.params.userId}, // Find this ID to update
            req.body, // Update the object with this data
            { new: true }, // Send back the updated version
            (err, updatedUser) => {
                if (err) {
                    res.status(500);
                    return next(err);
                };
                return res.status(201).send(updatedUser);
            })
    })
    .delete((req, res, next) => {
        User.findOneAndDelete({_id: req.params.userId}, (err, deletedUser) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(`Successfully removed user ${deletedUser.name} from the database.`)
        });
    });

module.exports = userRouter;