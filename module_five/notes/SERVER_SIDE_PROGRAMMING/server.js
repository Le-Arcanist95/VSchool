const express = require("express");
const app = express();

const users = [
    { name: "harry", age: 63 },
    { name: "larry", age: 19 },
    { name: "barry", age: 27 },
    { name: "cherry", age: 8 },
    { name: "fairy", age: 999 }
]

app.get('/users', (req, res) => {
    res.send(users);
});


    // 1: PORT  2: CB
app.listen(4321, () => {
    console.log("The server is running on Port 4321");
});