const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    reward: {
        type: Number,
        required: true
    },
    faction: {
        type: String,
        enum: ["Jedi", "Sith"],
        required: true
    }
});

module.exports = mongoose.model('Bounty', bountySchema);