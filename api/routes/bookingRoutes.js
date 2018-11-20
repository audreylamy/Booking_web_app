'use strict';

module.exports = function (app) {
    var bookingList = require('../controllers/bookingController');

//missed parentesis
    app.route('/books')
        .get(bookingList.list_all_books)
            .post(bookingList.create_a_book);


    // app.route('books/:bookId')
    //     .get(bookingList.read_a_book);

};