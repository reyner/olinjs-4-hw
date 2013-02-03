var Tweet = require('../models/tweet');


exports.index = function(req, res){
  if (req.session.user) {
    user = req.session.user;
  } else {
    user = {"name" : "Visitor", "_id" : 0};
  }
  Tweet.find({}).populate('user').sort("-_id").exec(function (err, docs) {
    if (err) return console.log('error', err);
    res.render('index', { title: "Twitter", loggedIn : user, tweets: docs });
  });
};

exports.logged_out = function(req, res){
  res.render('logged_out');
};