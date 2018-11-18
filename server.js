const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Room = require('./api/models/roomListModel'),
	bodyParser = require('body-parser');
	db = require('./api/data/db/connection');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/roomListRoutes');
routes(app);

app.listen(port);

console.log('room List started on:' + port);