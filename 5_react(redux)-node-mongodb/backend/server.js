//-----------------------Modules-----------------------//

const express = require('express'); // include express module
const bodyParser = require('body-parser'); // parsing incoming express
const passport = require('passport');
const cors = require('cors');
const app = express(); // create an express instance

// Include routes
const routes = require('./routes/index');

//-----------------------Config-----------------------//
//// Middleware
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(bodyParser.json()); // parse json data
app.use(cors());

//// Database
// Requiring file with no exports in it,- will run the whole file, like a big function.
require('./config/databaseConfig'); // load and run db config
require('./config/passportConfig'); // load passport config
app.use(passport.initialize());

//-----------------------Routes-----------------------//

// Use routes
app.use(routes);

//-----------------------Start server-----------------------//

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
