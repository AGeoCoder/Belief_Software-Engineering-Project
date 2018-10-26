var User = require('../models/user');

module.exports = function(router) {
  // adds user to database
  router.post('/users', function(req, res) {
    var user = new User();
    user.email = req.body.username;
    user.password = req.body.password;
    user.name = req.body.name;

    // makes sure all necessary fields filled in
    if (req.body.email == null || req.body.email == '' || req.body.password == null || req.body.password == '' || req.body.name == null || req.body.name == '') {
      res.send("Ensure, email, password, and name were provided.");
    } else {
      user.save(function(err) {
        if (err) {
          res.send('Email already exists.');
        } else {
          res.send('User created');
        }
      });
    }
  });

  return router;
}
