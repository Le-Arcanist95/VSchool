const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Polygender", "Female", "Male", "Agender", "Bigender", "Genderqueer", "Non-binary", "Genderfluid"],
        required: true
    },
    ip_adress: {
        type: String,
        required: true
    },
    net_worth: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema)