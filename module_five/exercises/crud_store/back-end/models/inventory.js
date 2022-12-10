const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Blueprint
const inventorySchema = new Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: false
    }
});

module.exports = mongoose.model('Inventory', inventorySchema);