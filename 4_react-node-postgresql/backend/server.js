//-----------------------Modules-----------------------//

const express = require('express'); // include express module
const bodyParser = require('body-parser'); // parsing incoming express
const cookieParser = require('cookie-parser'); // parsing incoming express
const sequelize = require('sequelize');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport'); // parsing incoming express
const cors = require('cors');
const app = express(); // create an express instance

// Include routes
const usersRouter = require('./routes/users');

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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use routes
app.use(usersRouter);

//-----------------------Start server-----------------------//

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
