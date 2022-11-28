const express = require('express');
const { v4: uuidv4 } = require('uuid');
const petRouter = express.Router();

// Fake Data
const pets = [
    { 
        name: "Rusty" , 
        breed: "Golden Retriever", 
        owner: "Harry",
        _id: uuidv4()
    },
    { 
        name: "Rufus", 
        breed: "Labrador", 
        owner: "Barry",
        _id: uuidv4()
    },
    { 
        name: "Raggy", 
        breed: "Unknown", 
        owner: "Fairy",
        _id: uuidv4()
    }
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

petRouter.route('/:petId')
    .get((req, res) => {
        res.send(pets.find(pet => pet._id === req.params.petId))
    })
    .put((req, res) => {
        const petId = req.params.petId;
        const petIndex = pets.findIndex(pet => pet._id === petId);
        const updatedPet = Object.assign(pets[petIndex], req.body);
        res.send(updatedPet);
    })
    .delete((req, res) => {
        const petId = req.params.petId
        const petIndex = pets.findIndex(pet => pet._id === petId);
        pet.splice(petIndex, 1)
        res.send('Successfully deleted the selected pet.')
    });

petRouter.get('/search', (req, res) => {
    const query = req.query;
    let filteredPets = [];
    
    function filter(query) {
        if(query.name) {
            return filteredPets = pets.filter(pet => pet.name === query.name);
        } 
        else if (query.age) {
            return filteredPets = pets.filter(pet => pet.breed === query.breed);
        } 
        else if (query.owner) {
            return filteredPets = pets.filter(pet => pet.owner = query.owner)
        }
        else if (query._id) {
            return filteredPets = pets.filter(pet => pet._id == query._id)
        };
    };
    filter(query);

    res.send(filteredPets)
});

module.exports = petRouter;