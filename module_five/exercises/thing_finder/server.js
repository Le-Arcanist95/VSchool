const { query } = require('express');
const express = require('express');
const app = express();

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
];

app.get("/item", (req, res) => {
    const query = req.query;
    let filteredItems = []
    // Key filter
    function filter(query) {
        if(query.name) {
            return filteredItems = inventoryItems.filter(item => item.name === query.name);
        } 
        else if (query.type) {
            return filteredItems = inventoryItems.filter(item => item.type === query.type);
        } 
        else if (query.price) {
            return filteredItems = inventoryItems.filter(item => item.price == query.price)
        }
    }
    filter(query);

    console.log(filteredItems);
    res.send(filteredItems);
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});