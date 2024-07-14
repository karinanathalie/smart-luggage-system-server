const mongoose = require('mongoose')

const cabinSchema = new mongoose.Schema({
    itemSelected: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CabinModel = mongoose.model('Cabin', cabinSchema);

module.exports = CabinModel;