/*
    This CJS (commonjs) module contains the logic for all
    data handling of items in the shop.

*/

//  Import Product model
const Product = require('../models/product');

// GET => / (shop) getProducts
exports.getProducts = (request, response, next) => {
  //  Fetch all products
  Product.fetchAll( products => {
    //  Render the shop page
  response.render(
    './shop/product-list',
    {
      prods: products,
      docTitle: 'All Products',
      path: '/products'
    });
  });
};

// GET => /shop/product-detail
exports.getProduct = (request, response, next) => {
  const productId = request.params.productId;
  //  Log productId to terminal
  console.log(productId);
  response.redirect('/');
};
  
// GET => /shop/index
exports.getIndex = (request, response, next) => {
  //  Fetch all products
  Product.fetchAll( products => {
    //  Render the shop page
  response.render(
    './shop/index',
    {
      prods: products,
      docTitle: 'Shop',
      path: '/'
    });
  });
};

// GET => /shop/cart
exports.getCart = (request, response, next) => {
  response.render('./shop/cart', {
    path: '/cart',
    docTitle: 'Your Cart'
  });
};

// GET => /shop/orders
exports.getOrders = (request, response, next) => {
  response.render('./shop/orders', {
    path: '/orders',
    docTitle: 'Your Orders'
  });
};

// GET => /shop/checkout
exports.getCheckout = (request, response, next) => {
  response.render('./shop/checkout', {
    path: '/checkout',
    docTitle: 'Checkout'
  });
};
