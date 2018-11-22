const express = require('express');
const router = express.Router();
const booksRouter = require('./bookingRoutes');

router.get('/', (req, res) => {
	res.render('index');
})

router.use('/api/books', booksRouter);

module.exports = router;