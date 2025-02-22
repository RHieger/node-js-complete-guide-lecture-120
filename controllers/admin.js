// Description: Controller for the admin routes

//  Import Product model
const Product = require('../models/product');

// GET => /admin/add-product
exports.getAddProduct = (request, response, next) => {
    response.render(
      './admin/add-product',
      {
        docTitle: 'Add Product',
        path: './admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
  };
  
  // POST => /admin/add-product
  exports.postAddProduct = ( (request, response, next) => {
    //  Create a new product

    const title = request.body.title;
    const imageUrl = request.body.imageUrl;
    const description = request.body.description;
    const price = request.body.price;

    const product = new Product(
      title,
      imageUrl,
      description,
      price
    );
    //  Save the product
    product.save();
    //  Redirect to the shop page
    response.redirect('/');
  });

// GET => /admin/products
exports.getProducts = (request, response, next) => {
  //  Fetch all products
  Product.fetchAll( products => {
  //  Render the shop page
  response.render(
    './admin/products',
    {
      prods: products,
      docTitle: 'Admin Products',
      path: './admin/products'
    });
}); 
};
