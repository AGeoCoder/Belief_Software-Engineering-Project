var User = require('../models/user');

module.exports = function(router) {

  // adds user to database route
  router.post('/users', function(req, res) {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.name = req.body.name;

    // makes sure all necessary fields filled in
    if (req.body.email == null || req.body.email == '' || req.body.password == null || req.body.password == '' || req.body.name == null || req.body.name == '') {
      // on failure, send this message
      res.json({success: false, message: 'Ensure, email, password, and name were provided.'});
    } else {
      user.save(function(err) {
        if (err) {
          res.json({success: false, message: 'Email already exists.'});
        } else {
          res.json({success: true, message: 'User created.'});
        }
      });
    }
  });

  // user login route
  router.post('/authenticate', function(req, res) {
    User.findOne({email: req.body.email}).select('email name password').exec(function(err, user) {
      if (err) throw err;

      if (!user) {
        res.json({success: false, message: 'Could not authenticate user'})
      } else if (user) {
        // makes sure a pasword was input
        if (req.body.password) {
          var validPassword = user.comparePassword(req.body.password);
        } else {
          res.json({success: false, message: 'No password provided'});
        }

        if (!validPassword) {
          res.json({success: false, message: 'Could not authenticate password'});
        } else {
          res.json({success: true, message: 'User authenticated'})
        }
      }
    });
  });

  return router;
}
