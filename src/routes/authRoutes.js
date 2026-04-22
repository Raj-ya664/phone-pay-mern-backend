const express = require('express');
const { registerUser, loginUser, getUserProfile, setupMpin } = require('../controllers/authController');
const { protect } = require('../middleware/auth'); // Assuming protect middleware is in src/middleware/auth.js

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.post('/set-mpin', protect, setupMpin);

module.exports = router;
