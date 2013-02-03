var mongoose = require('mongoose');

var schema = mongoose.Schema({
  user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String
});
var Tweet = mongoose.model('Tweet', schema);

module.exports = Tweet;