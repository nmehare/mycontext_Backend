const express = require('express');
var PORT = process.env.PORT || 3000 ;
const bodyParser = require('body-parser');
const users = require('./routes/users');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var path = require('path');
var routes = require('./routes/users');
//npm run dev----------------------run using this command
// create express APP
const app = express();
app.use(cors());
//app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(bodyParser.json());//bodyparser so that we can pass json data to this app
//app.use(cors());//enable cors server and client running on diffrent port 
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'dist')));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//app.use('/api/users', users);
app.use('/', routes);
// listen for requests
app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
});


module.exports = app;