//  shop.js
//
//  This module contains routing logic for the online
//  shop reached at the '/' path.

//  Required modules:
const path = require('path');

const express = require('express');

//  Import productsController
const shopController = require('../controllers/shop');

//  Create Express Router:
const router = express.Router();

//  Routing logic for shop:
router.get('/', shopController.getIndex);

//  Routing logic for /products:
router.get('/products', shopController.getProducts);

//  Routing logic for /products/:productId--detail view
router.get('/products/:productId', shopController.getProduct);

//  Routing logic for /cart:
router.get('/cart', shopController.getCart);

//  Routing logic for /orders:
router.get('/orders', shopController.getOrders);

//  Routing logic for /checkout:
router.get('/checkout', shopController.getCheckout);

//  Exports:
module.exports = router;
