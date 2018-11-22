const books = require('express').Router();
const bookingList = require('../controllers/bookingController');

books.get('/', bookingList.list_all_books)
books.post('/', bookingList.create_a_book);

module.exports = books;