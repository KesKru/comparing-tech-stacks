//-----------------------Modules-----------------------//
const express = require('express'); // include express module
const bodyParser = require('body-parser'); // parsing incoming express
const passport = require('passport'); // parsing incoming express
const cors = require('cors');
const app = express(); // create an express instance

// Include routes
const routes = require('./routes/index');

//-----------------------Config-----------------------//
//// Database
require('./config/databaseConfig'); // load db config
//// Passport
require('./config/passportConfig'); // load passport config
//// App config
app.use(express.static(__dirname + '/public')); // Specify static files folder
app.use(cors()); // Alow Cross-origin resource sharing
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(bodyParser.json()); // parse json data
// app.use(cookieParser('keyboard cat')); // parse cookies
app.use(require('./config/sessionsConfig')); // load sessions config
app.use(passport.initialize());
app.use(passport.session());

//-----------------------Routes-----------------------//
app.use(routes);

//-----------------------Start server-----------------------//
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
