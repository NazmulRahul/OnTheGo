const express = require('express');
const router = express.Router();
const { createItinerary, getAllItineraries } = require('../controllers/ItineraryController');

router.route('/').post(createItinerary).get(getAllItineraries);


module.exports = router;