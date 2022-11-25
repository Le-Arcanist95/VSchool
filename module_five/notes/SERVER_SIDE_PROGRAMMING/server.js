const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});


            // 1: PORT  2: CB
app.listen(4321, () => {
    console.log("The server is running on Port 4321");
});