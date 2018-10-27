var User = require('../models/user');
var jwt = require('jsonwebtoken');
// secret used to create session for user after login
var secret = 'testSecret';

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

          // makes sure name, email, and password all match validation criteria
          if (err.errors != null) {
            if (err.errors.name) {
              res.json({success: false, message: err.errors.name.message});
            } else if (err.errors.email) {
              res.json({success: false, message: err.errors.email.message});
            } else if (err.errors.password) {
              res.json({success: false, message: err.errors.password.message});
            } else {
              res.json({success: false, message: err});
            }
          } else if (err) {

            if (err.code == 11000) {
              res.json({success: false, message: 'Email already taken'});
            } else {
              res.json({success: false, message: err});
            }

          }

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
          // give user token so they are remembered when entering the site within 24 hours
          var token = jwt.sign({email: user.email, name: user.name}, secret, {expiresIn: '24h'});
          res.json({success: true, message: 'User authenticated', token: token})
        }
      }
    });
  });

  router.use(function(req, res, next) {
    var token = req.body.token || req.body.query || req.headers['x-access-token'];

    if (token) {
      // verifies token
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          res.json({success: false, message: 'Token invalid'});
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.json({success: false, message: 'No token provided'});
    }
  });

  router.post('/me', function(req, res) {
    res.send(req.decoded);
  });

  return router;
}
