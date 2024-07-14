const express = require('express');
const router = express.Router();
const baggageControllers = require('../controllers/baggageControllers');

router.get('/', baggageControllers.getAllBaggage);
router.post('/', baggageControllers.createBaggage);

module.exports = router;