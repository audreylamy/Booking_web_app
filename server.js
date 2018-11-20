const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    book = require('./api/models/bookingModel'),
	bodyParser = require('body-parser');
	db = require('./api/data/db/connection');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PROPFIND');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
  });

var routes = require('./api/routes/bookingRoutes');
routes(app);

app.listen(port);

console.log('book List started on:' + port);