// Import required modules and files
const express = require('express');
const User = require('../models/user.js');
const userRouter = express.Router();

// Create routes for get all and post requests
userRouter.route('/')
    .get((req, res, next) => {
        User.find((err, users) => {
            // Catch errors and send them to custom error handler with next function
            if(err) {
                res.status(500);
                return next(err);
            };
            res.status(200).send(users);
        });
    })
    .post((req, res, next) => {
        const newUser = new User(req.body);
        newUser.save((err, savedUser) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(savedUser);
        });
    });
// Create routes for single get request, put, and delete requests
userRouter.route('/:userId')
    .get((req, res, next) => {
        // Give first argument of '_id' for DB search
        User.findById({_id: req.params.userId}, (err, foundUser) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(foundUser);
        });
    })
    .put((req, res, next) => {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            // Give update information from req.body
            req.body,
            // Tell function to return updated object instead of previous
            { new: true },
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
            // Utilize 'deletedUser' variable to verify the proper selection was removed
            return res.status(200).send(`Successfully removed user ${deletedUser.name} from the database.`)
        });
    });

module.exports = userRouter;