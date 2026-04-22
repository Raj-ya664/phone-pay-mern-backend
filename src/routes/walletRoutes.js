const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { payBill, getBalance } = require('../controllers/walletController');

router.post('/pay-bill', protect, payBill);
router.get('/balance', protect, getBalance);



module.exports = router;
