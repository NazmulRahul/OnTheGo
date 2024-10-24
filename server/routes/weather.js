const express = require('express');
const router = express.Router();
const getWeatherForecast = require('../controllers/weatherController');

router.post('/weather', getWeatherForecast);

module.exports = router;