const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload=multer()

const { uploadImage } = require('../controllers/ImageController');
router.route('/').post(upload.single("file"),uploadImage);

module.exports = router;