const express = require('express');
const router = express.Router();
const booksRouter = require('./bookingRoutes');
const roomsRouter = require('./roomsRoutes');

router.get('/', (req, res) => {
	res.render('index');
})

router.use('/api/books', booksRouter);

router.use('/api/rooms', roomsRouter);

module.exports = router;