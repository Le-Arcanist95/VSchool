const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Blueprint
    const petSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        breed: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    });

module.exports = mongoose.model('Pet', petSchema);