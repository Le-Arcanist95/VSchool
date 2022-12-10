// Import required modules and files
const express = require("express");
const bountyRouter = express.Router();
const Bounty = require('../models/bounty.js');

// Direct Routes
bountyRouter.route('/')
    .get((req, res, next) => {
        Bounty.find((err, bountyList) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            res.status(200).send(bountyList);
        })
    })
    .post((req, res) => {
        const newBounty = new Bounty(req.body);
        newBounty.save((err, bountyList) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            res.status(201).send(bountyList);
        });
    });

// Routes by ID
bountyRouter.route('/:bountyId')
    .get((req, res, next) => {
        Bounty.findOne(
            { _id: req.params.bountyId}, 
            (err, foundBounty) => {
                if(err) {
                    res.status(500);
                    return next(err);
                };
                res.status(200).send(foundBounty);
            }
        );
    })
    .put((req, res, next) => {
        Bounty.findOneAndUpdate(
            { _id: req.params.bountyId},
            req.body,
            { new: true },
            (err, updatedBounty) => {
                if(err) {
                    res.status(500);
                    return next(err);
                };
                res.status(201).send(updatedBounty);
            }
        );
    })
    .delete((req, res) => {
        Bounty.findOneAndDelete(
            { _id: req.params.bountyId},
            (err, deletedBounty) => {
                if(err) {
                    res.status(500);
                    return next(err);
                };
                res.status(204).send();
            }
        );
    });

// Routes by Query
bountyRouter.get('/search/bounty', (req, res) => {
        console.log(req);
    })

module.exports = bountyRouter;