const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');
const PaymentService = require('../services/paymentService');
const PaymentInstance = new PaymentController(new PaymentService());

router.post('/payment/new', (req, res) => {
  PaymentInstance.getMercadopagoLink(req, res);
});
router.post('/webhook', (req, res) => {
  PaymentInstance.webhook(req, res);
});

module.exports = router;
