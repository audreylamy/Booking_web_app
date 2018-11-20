'use strict';

var mongoose = require('mongoose'),
    Book = mongoose.model('Books');


exports.list_all_books = function (req, res) {
    console.log('here')
    Book.find({}, (err, book) => {
        console.log('here1')
        if (err)
            res.send(err);
        if (book) {
            console.log('oui')
            res.json(book);
        }
    });
};

exports.create_a_book = function (req, res) {
    var newBooking = {
        roomName: req.body.name,
        date: req.body.date,
        hour: req.body.hour
    }
    //Create a new reservation
    var new_book = new Book(newBooking);
    new_book.save(function (err, book) {
        console.log(book)
        if (err)
            res.sendStatus(500);
        if (book) {
            // send reservation dans format json
            res.json({message: "Your reservation is register"});
        }
    });
};

// exports.read_a_room = function (req, res) {
//     console.log('dgdsgdsgdsgs')
//     console.log(req.params)
//     // Room.findById(req.params.roomId, function (err, room) {
//     //     if (err)
//     //         res.send(err);
//     //     res.json(user);
//     // });
// };