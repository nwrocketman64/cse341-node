// Import the models for interacting with the database.
const Product = require('../models/product');

/* exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
}; */

const products = [];

// The default page.
exports.getHome = (req, res, next) => {
  // Deliver the product view and include the list of products.
  Product.fetchAll(products => {
    res.render('shop/index', {
      product: products[0],
      pageTitle: 'Fancy Book Store',
      path: '/'
    });
  });
};

// The list of products.
exports.getProducts = (req, res, next) => {
  // Deliver the product view and include the list of products.
  Product.fetchAll(products => {
    res.render('shop/products', {
      products: products,
      pageTitle: 'Products',
      path: '/products'
    });
  });
};

// Get the product details.
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-details', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};