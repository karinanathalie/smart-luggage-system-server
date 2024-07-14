const CabinModel = require('../models/cabinModel');

exports.createCabin = async (req, res) => {
    try {
        const { itemSelected, weight } = req.body;
        const newCabin = new CabinModel({ itemSelected, weight });
        await newCabin.save();
        res.status(201).json(newCabin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};