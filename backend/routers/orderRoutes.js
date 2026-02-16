const express = require('express');
const router = express.Router();
const { addOrderItems } = require('../controllers/orderController');

// Definimos la ruta POST
router.route('/').post(addOrderItems);

module.exports = router;