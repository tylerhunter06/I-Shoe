"use strict";

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
let express    = require("express");            // Duh!
let bodyParser = require("body-parser");        // For reading request data
let db         = require('./models');           // Pull in our table models
let exphbs     = require('express-handlebars'); // Use handlebars view engine
let routes     = require('./routes/main_routes'); // Pull in our router file

const passport = require('passport');
const session = require('express-session');

// Set the port to use during development
let port = process.env.PORT || 17001;

// Dev Test - Delete me later
//console.log(db.shoeInventory);
//
// End of Dev Test - Delete me later

// Create the express object that we'll use
var app = express();
//body parser middleware

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


// region Passport
app.use(session({ secret: 'IShoe', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// endregion Passport

// Tell the express object where front end files are
app.use(express.static(process.cwd() + '/public'));

// Set up Handlebars as our view engine
app.engine('handlebars', exphbs({ defaultLayout: 'iShoeErrors' }));
app.set('view engine', 'handlebars');

//Tell the express app to use the routes in ./routes/main_routes
app.use('/', routes);

require('./config/passport/passport')(passport, db.users);
require('./routes/auth_routes')(app, passport);

// Start listening
db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
