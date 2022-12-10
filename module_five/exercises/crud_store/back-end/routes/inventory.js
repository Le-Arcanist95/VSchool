// Import required modules and files
const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory.js');

// Direct routes
inventoryRouter.route('/')
    .get((req, res, next) => {
        Inventory.find((err, inventory) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(inventory);
        });
    })
    .post((req, res, next) => {
        const newItem = new Inventory(req.body);
        newItem.save((err, inventory) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(newItem);
        });
    });

// Routes by ID
inventoryRouter.route('/:itemId')
    .get((req, res, next) => {
        Inventory.findById({ _id: req.params.itemId }, (err, foundItem) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(foundItem);
        });
    })
    .put((req, res, next) => {
        Inventory.findOneAndUpdate(
            { _id: req.params.itemId },
            req.body, // Updates
            { new: true }, // Return update instead of prevObj
            (err, updatedItem) => {
                if (err) {
                    res.status(500);
                    return next(err);
                };
                return res.status(201).send(updatedItem);
            }
        );
    })
    .delete((req, res, next) => {
        Inventory.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            return res.status(204).send();
        });
    });

module.exports = inventoryRouter