const rooms = require('express').Router();
const roomsList = require('../controllers/roomsController');

rooms.get('/', roomsList.list_all_rooms)

module.exports = rooms;