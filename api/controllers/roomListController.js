'use strict';

var mongoose = require('mongoose'),
    Room = mongoose.model('Rooms');


exports.list_all_rooms = function (req, res) {

    Room.find({}, function (err, room) {
        if (err)
            res.send(err);
        res.json(room);
    });
//missed semicolumn
};

exports.create_a_room = function (req, res) {
    var new_room = new Room(req.body);
    new_room.save(function (err, room) {

        if (err)
            res.send(err);
        res.json(user);
    });
//missed semicolumn

};

exports.read_a_room = function (req, res) {

    Room.findById(req.params.roomId, function (err, room) {
        if (err)
            res.send(err);
        res.json(user);
    });
};