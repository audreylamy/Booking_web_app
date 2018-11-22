'use strict';

var mongoose = require('mongoose');
var roomsJSON = require('../../rooms.json');

exports.list_all_rooms = function (req, res) {
    res.send(roomsJSON);
}