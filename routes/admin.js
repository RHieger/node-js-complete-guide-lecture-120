//  admin.js
//
//  This module contains the logic for adding products to
//  an online shop and will eventually be accessible only
//  to a site administrator.

//  Required packages:
const path = require('path');

const express = require('express');

//  Import controller that adds products to the online store:
const adminController = require('../controllers/admin');

//  Create an Express Router:
const router = express.Router();

// Routing Logic to add products to online store:

//  /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

//  /admin/products => GET
router.get('/products', adminController.getProducts);

//  /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

//  Exports:
module.exports = router;
