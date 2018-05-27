var mongoose = require('mongoose');

//Map Global Promises
mongoose.Promise = global.Promise;

//Connect To Mongoose
var connection = mongoose.createConnection(`mongodb://localhost/dddd`);

connection.on('connected', () => {
  console.log('connected to mongodb');
});

connection.on('disconnected', () => {
  console.log('connection disconnected');
});