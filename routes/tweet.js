var Tweet = require('../models/tweet');
var User = require('../models/user');

exports.create = function(req, res){
  var user_req = req.body.uid;
  var new_tweet = new Tweet({ user:user_req, text: req.body.text });
  new_tweet.save(function (err) {
    if (err) return console.log("error", err);
    res.redirect('/');
  });
};

exports.list = function(req, res){
  Tweet.find({}).populate('user').exec(function (err, docs) {
    if (err) return console.log('error', err);
    res.render('_twits', {tweets: docs, title: 'List of Tweets'});
  });
};

exports.delete_all = function(req, res){
  Tweet.remove({}, function(err) { 
    console.log('collection removed') 
  });
  res.send("deleted");
};