const express = require('express');
const router = express.Router();
const { createItinerary, deleteItinerary } = require('../controllers/ItineraryController');

router.route('/').post(createItinerary).delete(deleteItinerary);


module.exports = router;