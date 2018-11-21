'use strict';

module.exports = function (app) {
    var bookingList = require('../controllers/bookingController');

    app.route('/books')
        .get(bookingList.list_all_books)
            .post(bookingList.create_a_book);
};