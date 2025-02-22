//  Lecture 09.120: Extracting Dynamic Params

//  Required libraries:
const path = require('path');

const express = require('express');

const adminRoutes = require('./routes/admin');        //  Route
const shopRoutes = require('./routes/shop');          //  Route

const controller404 = require('./controllers/404');   //  Controller

//  Invoke Express.js:
const app = express();

//  Set Templating Engine:
app.set( 'view engine', 'ejs' );
app.set('views', 'views');

//  Set base directory to support layouts
app.locals.basedir = path.join(__dirname, 'views');

//  Set location for views (this one is default).
//  Therefore this setting is explicit, and not
//  really strictly required.
app.set('views', 'views');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse incoming POST request body:
app.use(express.urlencoded( {extended: false} ));

// Enable files to be served statically:
// app.use( express.static(path.join(rootDir, 'public')) );

//  MIDDLEWARE

//  Admin routing:
app.use('/admin', adminRoutes);

//  Shop routing:
app.use(shopRoutes);  // Front-facing shop page

//  Catch-All Middleware
app.use(controller404.get404);

//  Create Server and initialize at port 3000:
app.listen(3000, () => {
  console.log(
    'Server listening on port 3000 for requests...'
  );
});
