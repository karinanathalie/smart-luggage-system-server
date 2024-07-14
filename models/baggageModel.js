const mongoose = require('mongoose')

const baggageSchema = new mongoose.Schema({
    trackingNumber: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

const BaggageModel = mongoose.model('Baggage', baggageSchema);

module.exports = BaggageModel;