'use strict';

module.exports = function (app) {
    var roomList = require('../controllers/roomListController');

//missed parentesis
    app.route('/rooms')
        .get(roomList.list_all_rooms)
            .post(roomList.create_a_room);


    app.route('rooms/:roomId')
        .get(roomList.read_a_room);

};