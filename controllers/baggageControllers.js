const BaggageModel = require('../models/baggageModel');

exports.getAllBaggage = async (req, res) => {
    try {
        const baggage = await BaggageModel.find();
        res.json(baggage);
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
};

exports.createBaggage = async (req, res) => {
    try {
        const newBaggage = new BaggageModel({
            trackingNumber: req.body.trackingNumber,
            ownerName: req.body.ownerName,
            weight: req.body.weight,
            size: req.body.size,
        });
        await newBaggage.save();
        res.status(201).json(newBaggage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};