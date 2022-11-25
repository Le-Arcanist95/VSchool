const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = process.env.PORT || 1234;

const bounties = [
    {
        fName: "Luke",
        lName: "Skywalker",
        living: true,
        bounty: 300,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        fName: "Darth",
        lName: "Vader",
        living: false,
        bounty: 500,
        type: "Sith",
        _id: uuidv4()
    }
];

app.route('/bounty')
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuidv4();
        bounties.push(newBounty);
        console.log(`Successfully added ${newBounty.fName} ${newBounty.lName} to the hitlist.`);
    });
app.route('/bounty/:bountyId')
    .get((req, res) => {
        const reqItem = bounties.find(bounty => bounty._id = req.params.bountyId);
        res.send(reqItem);
    })
    .put((req, res) => {
        
    })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});