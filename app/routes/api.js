var User = require('../models/user');
var jwt = require('jsonwebtoken');
// secret used to create session for user after login
var secret = 'testSecret';
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

module.exports = function(router) {

  var options = {
    auth: {
      api_user: 'beliefmetoo', // sendgrid user
      api_key: 'x2y>=G7j.Ze+EM3?' // sendgrid password
    }
  }
  var client = nodemailer.createTransport(sgTransport(options));

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
        res.json({success: false, message: 'Could not authenticate user'});
      } else if (user) {
        // makes sure a pasword was input
        if (req.body.password) {
          var validPassword = user.comparePassword(req.body.password);
          if (!validPassword) {
            res.json({success: false, message: 'Could not authenticate password'});
          } else {
            // give user token so they are remembered when entering the site within 24 hours
            var token = jwt.sign({email: user.email, name: user.name}, secret, {expiresIn: '24h'});
            res.json({success: true, message: 'User authenticated', token: token});
          }
        } else {
          res.json({success: false, message: 'No password provided'});
        }
      }
    });
  });

  router.put("/resetpassword", function(req, res) {
    User.findOne({email: req.body.email}).select('email resettoken').exec(function(err, user) {
      if (err) throw err;
      if(!user) {
        res.json({success: false, message: 'Email was not found'});
      } else {
        user.resettoken = jwt.sign({email: user.email}, secret, {expiresIn: '24h'});
        user.save(function(err) {
          if (err) {
            res.json({success: false, message: err});
          } else {
            var email = {
              from: 'Belief the #MeToo Website, beliefmetoo@gmail.com',
              to: user.email,
              subject: 'Belief Reset Password Request',
							text: 'Hello, you recently requested a password reset link. Please click on the link below to reset your password:<br><br><a href="http://localhost:8080/reset/' + user.resettoken,
							html: 'Hello, you recently requested a password reset link. Please click on the link below to reset your password:<br><br><a href="http://localhost:8080/reset/' + user.resettoken + '">http://localhost:8080/reset/</a>'
						};
            client.sendMail(email, function(err, info) {
              if (err) console.log(err);
            });

            res.json({success: true, message: 'Check email to reset password'});
          }
        });
      }
    });
  });

  router.get("/resetpassword/:token", function(req, res) {
    User.findOne({resettoken: req.params.token}).select().exec(function(err, user) {
      if (err) throw err;
      var token = req.params.token;

      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          res.json({success: false, message: 'Password link has expired'});
        } else {
          if (!user) {
            res.json({success: false, message: 'Password link has expired'})
          } else {
            res.json({success: true, user: user});
          }
        }
      });
    });
  });

  router.put("/savepassword", function(req, res) {
    User.findOne({email: req.body.email}).select('email password resettoken').exec(function(err, user) {
      if (err) throw err;

      if (req.body.password == null || req.body.password == '') {
        res.json({success: false, message: 'No password provided'});
      } else {
        user.password = req.body.password;

        user.resettoken = false;
        user.save(function(err) {
          if (err) {
            res.json({success: false, message: err});
          } else {
            res.json({success: true, message: 'Password reset'});
          }
        });
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
