/**
 * 
 *  product.js
 * 
 *  Model for Product
 * 
 */

// REQUIRED NODE MODULES

//  Import file system module
const fs = require('fs');

//  Import path module
const path = require('path');

// Global Helper constant for JSON File
const prodsPath = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = callback => {
    fs.readFile(prodsPath, (error, fileContent) => {
    if (error) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
}

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  // Save product to mock database
  save()  {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      
      fs.writeFile(
        prodsPath, JSON.stringify(products),
        (error) => {
          console.log(error);
        });
    });
  }

  // Fetch all products
  static fetchAll(callback) {
    //Populate shop page
    getProductsFromFile(callback);
  }
};
