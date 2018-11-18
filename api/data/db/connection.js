const mongoose = require('mongoose');
const keys = require('./keys');
const mongoURI = keys.mongoURI;
const Room = require('../../models/roomListModel')
const roomJSON = require('../rooms.json')

console.log(roomJSON.rooms.length);
console.log(roomJSON.rooms)

mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, {useCreateIndex: true, useNewUrlParser: true}).then(
          () => {console.log('Database connection is successful') },
          err => { console.log('Error when connecting to the database'+ err)}
);

//INSERT ROOMS inside BDD
for (var i = 0; i < roomJSON.rooms.length; i++) {
   	const newRoom = new Room(roomJSON.rooms[i])
    newRoom.save(function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    })
}

module.exports = mongoose;