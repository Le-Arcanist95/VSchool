const express = require('express');
const { v4: uuidv4 } = require('uuid');
const petRouter = express.Router();

// Fake Data
const pets = [
    { name: "Rusty" , breed: "Golden Retriever", owner: "Harry" },
    { name: "Rufus", breed: "Labrador", owner: "Barry"},
    { name: "Raggy", breed: "Unknown", owner: "Fairy"}
]

// Routes
petRouter.route('/')
    .get((req, res) => {
        res.send(pets);
    })
    .post((req, res) => {
        const newPet = req.body;
        newPet._id = uuidv4();
        pets.push(newPet);
        res.send(`Successfully added ${req.body.name} to the database.`);
    });


module.exports = petRouter;