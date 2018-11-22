'use strict';

var mongoose = require('mongoose'),
    Book = mongoose.model('Books'),
    fs = require('fs');

exports.list_all_books = function (req, res) {
    Book.find({}, (err, book) => {
        if (err)
            res.send(err);
        if (book) {
            res.json(book);
        }
    });
};

exports.create_a_book = function (req, res) {
    var obj = {booking: []};
    var newBooking = {
        roomName: req.body.name,
        date: req.body.date,
        hour: req.body.hour
    }
    //Create a new reservation
    var new_book = new Book(newBooking);
    new_book.save(function (err, book) {
        if (err)
            res.sendStatus(500);
        if (book) {
            // send reservation inside json
            // check if file exist or not
            fs.exists('bookingFile.json', function(exists) { 
                if (exists) { 
                    fs.readFile('bookingFile.json', function readFileCallback(err, data){
                        if (err){
                            console.log(err);
                        } else {
                        obj = JSON.parse(data); //now it is an object
                        obj.booking.push(newBooking); //add some data
                        json = JSON.stringify(obj); //convert it back to json
                        fs.writeFile('myjsonfile.json', json, function(err) {
                            if (err) throw err;
                            res.json({message: "Your reservation is register"})    
                        })
                    }});
                } else {
                    obj.booking.push(newBooking); 
                    var json = JSON.stringify(obj); 
                    fs.writeFile('bookingFile.json', json, function(err) {
                        if (err) throw err;
                        res.json({message: "Your reservation is register"})    
                    })
                }
            }); 
        }
    });
};
