// Import the needed libraries.
const path = require('path');

// Import the added libraries.
const express = require('express');

// Import the shop controller.
const shopController = require('../controllers/shop');

// Setup the router.
const router = express.Router();

// router.get('/', shopController.getIndex);

// router.post('/cart', shopController.postCart);

// GET / aka the home page.
router.get('/', shopController.getHome);

// GET /products
router.get('/products', shopController.getProducts);

// GET /product-details
router.get('/product-details/:productId', shopController.getProduct);

// Export the router.
module.exports = router;
