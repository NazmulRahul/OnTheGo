const express = require('express');
const router = express.Router();
const {
    updateTrip,
    createTrip,
    deleteTrip
}=require('../controllers/TripController');

///api/v1/
router.route('/').post(createTrip);
router.route('/:id').patch(updateTrip).delete(deleteTrip);


module.exports = router;