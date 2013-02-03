var User = require('../models/user');

exports.list = function(req, res){
  var query = User.find({});
  query.exec(function (err, docs) {
    if (err)
      return console.log("error", err);
    res.render('user_list', {users: docs, title: 'List of users'});
  });
};


exports.new = function(req, res){
  res.render('user_new', {
    title: 'New user'
  });
};

exports.create = function(req, res){
  User.findOne({ name : req.body.name }).exec(function (err, docs) {
    if (err) return console.log('error', err);
    if (docs) {
      req.session.user = docs;
      res.redirect('/');
    } else {
      var new_user = new User({ name: req.body.name });
      new_user.save(function (err) {
        if (err) return console.log("error", err);
        req.session.user = new_user;
        res.redirect('/');
      });
    }
  });
};
