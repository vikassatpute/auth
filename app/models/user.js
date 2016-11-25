var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({
  fname: String,
  lname: String,
	username: String,
	password: String,
	admin: Boolean
}));
