var Tweet = require('../models/tweet');


exports.index = function(req, res){
  if (req.session.user) {
    user = req.session.user;
  } else {
    user = {"name" : "Visitor"};
  }
  Tweet.find({}).populate('user').exec(function (err, docs) {
    if (err) return console.log('error', err);
    res.render('index', { title: "Twitter", loggedIn : user, tweets: docs });
  });
};