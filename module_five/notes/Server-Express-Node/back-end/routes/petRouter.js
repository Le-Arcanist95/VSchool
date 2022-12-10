const express = require('express');
const petRouter = express.Router();
const Pet = require('../models/pet.js');

// Routes
petRouter.route('/')
    .get((req, res, next) => {
        Pet.find((err, pets) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(pets);
        });
    })

petRouter.route('/:userId')
    .post((req, res, next) => {
        req.body.owner = req.params.userId
        const newPet = new Pet(req.body)
        newPet.save((err, pets) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(newPet);
        });
    });   

petRouter.route('/:petId')
    .get((req, res, next) => {
        User.findById({_id: req.params.petId}, (err, foundPet) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(foundPet);
        })
    })
    .put((req, res, next) => {
        User.findOneAndUpdate(
            {_id: req.params.petId}, // Find this ID to update
            req.body, // Update the object with this data
            { new: true }, // Send back the updated version
            (err, updatedPet) => {
                if (err) {
                    res.status(500);
                    return next(err);
                };
                return res.status(201).send(updatedPet);
            })
    })
    .delete((req, res, next) => {
        User.findOneAndDelete({_id: req.params.userId}, (err, deletedPet) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(`Successfully removed pet ${deletedPet.name} from the database.`)
        });
    });

module.exports = petRouter;