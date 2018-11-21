const mongoose = require('mongoose');
const keys = require('./keys');
const mongoURI = keys.mongoURI;

mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, {useCreateIndex: true, useNewUrlParser: true}).then(
          () => {console.log('Database connection is successful') },
          err => { console.log('Error when connecting to the database'+ err)}
);

module.exports = mongoose;