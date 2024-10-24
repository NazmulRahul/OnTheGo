const express = require('express');
const router = express.Router();
const {handleLogin,handleRegister,handleLogout} = require('../controllers/AuthController');

router.post('/login', handleLogin);
router.post('/register', handleRegister);
// router.post('/logout', handleLogout);
module.exports = router;