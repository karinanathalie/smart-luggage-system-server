const express = require('express');
const router = express.Router();
const cabinController = require('../controllers/cabinControllers');

router.post('/', cabinController.createCabin);

module.exports = router;