// Import the models for interacting with the database.
const Product = require('../models/product');

// The renders for each page.
// The add book page.
exports.getAddProduct = (req, res, next) => {
  // Deliver the add book view.
  res.render('admin/add-products', {
      pageTitle: 'Add Product',
      path: '/add-product'
  });
};

// Add the product to the list from the default page.
exports.postAddProduct = (req, res, next) => {
  // Add the product to the list/
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.descript;
  const product = new Product(null, title, imageUrl, description, price);
  
  // Save the product to the json file.
  product.save();
  
  // Then redirect the user back to main page.
  res.redirect('/');
};

// The list of products to edit page.
exports.getEditProduct = (req, res, next) => {
  // Deliver the add book view.
  Product.fetchAll(products => {
    res.render('admin/product-list', {
      products: products,
      pageTitle: 'The List of Product',
      path: '/edit-products'
    });
  });
};

exports.getEditProductView = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

// The function deletes a product.
exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/edit-products');
};