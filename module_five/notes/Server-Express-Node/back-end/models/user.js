const mongoose = require('mongoose');
const Schema = mongoose.Schema

// User Blueprint
    const userSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        pets: {
            type: [{
                name: String,
                breed: String,
                owner: String
            }],
            required: false
        }
    });

module.exports = mongoose.model('User', userSchema);