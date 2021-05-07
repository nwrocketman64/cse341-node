// Import the needed libaries.
const path = require('path');

// Import the needed added libraries.
const express = require('express');

// Import the admin controller.
const adminController = require('../controllers/admin');

// Setup the router.
const router = express.Router();

// The Routes.
// GET /admin/add-product
router.get('/add-product', adminController.getAddProduct);

// GET /admin/create-product
router.post('/create-product', adminController.postAddProduct);

// GET /admin/edit-products
router.get('/edit-products', adminController.getEditProduct);

// GET /admin/edit-product-view
router.get('/edit-product-view/:productId', adminController.getEditProductView);

// POST update-product
router.post('/update-product', adminController.postEditProduct);

// POST /admin/delete-product
router.post('/delete-product', adminController.postDeleteProduct);

// Export the router.
module.exports = router;
