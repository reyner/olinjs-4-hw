var mongoose = require('mongoose');

var schema = mongoose.Schema({
  name: String
});
var User = mongoose.model('User', schema);

module.exports = User;