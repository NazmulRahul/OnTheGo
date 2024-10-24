const express = require('express');
const router = express.Router();
const {getAllTrips,
    getTripById,
    createTrip,
    updateTrip,
    deleteTrip}=require('../controllers/TripController');

///api/v1/
router.route('/').get(getAllTrips).post(createTrip);
router.route('/:id').get(getTripById).patch(updateTrip).delete(deleteTrip);


module.exports = router;