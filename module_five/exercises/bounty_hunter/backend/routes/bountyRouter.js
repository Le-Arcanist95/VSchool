const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bountyRouter = express.Router();


const bounties = [
    {
        fName: "Luke",
        lName: "Skywalker",
        living: true,
        reward: 300,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        fName: "Darth",
        lName: "Vader",
        living: false,
        reward: 500,
        type: "Sith",
        _id: uuidv4()
    }
];

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuidv4();
        bounties.push(newBounty);
        console.log(`Successfully added ${newBounty.fName} ${newBounty.lName} to the hitlist.`);
    });
bountyRouter.route('/:bountyId')
    .get((req, res) => {
        res.send(bounties.find(bounty => bounty._id === req.params.bountyId));
    })
    .put((req, res) => {
        const selectedBounty = bounties.find(bounty => bounty._id === req.params.bountyId);
        const updates = req.body;
        const newBountySheet = Object.assign(selectedBounty, req.body)
        res.send(newBountySheet);
        console.log(`Successfully updated bounty ID# ${req.params.bountyId}`);
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        bounties.splice(bountyIndex, 1)
        res.send('Successfully deleted the selected bounty.');
    });
bountyRouter.get('/search/bounty', (req, res) => {
        console.log(req);
    })

module.exports = bountyRouter;