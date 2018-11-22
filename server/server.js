const express = require('express'),
        app = express(),
        port = process.env.PORT || 3000,
        book = require('./models/bookingModel'),
	    bodyParser = require('body-parser');
        db = require('./data/db/connection');
        routes = require('./routes/index.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PROPFIND');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
  });

app.use('/', routes);

app.listen(port);

console.log('book List started on:' + port);