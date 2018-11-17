var User = require('../models/user');
var Post = require('../models/post');
var jwt = require('jsonwebtoken');
// secret used to create session for user after login
var secret = 'testSecret';
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

module.exports = function(router) {

  // account info for sendgrid (middleware that sends emails for password reset)
  var options = {
    auth: {
      api_user: 'beliefmetoo', // sendgrid user
      api_key: 'x2y>=G7j.Ze+EM3?' // sendgrid password
    }
  }
  var client = nodemailer.createTransport(sgTransport(options));

  router.post('/posts', function(req, res) {
    var post = new Post();
    // gets info from input and sets it
    post.title = req.body.title;
    post.bodyInfo = req.body.bodyInfo;
    post.createdBy = req.body.createdBy;

    if (req.body.title == null || req.body.title == '' || req.body.bodyInfo == null || req.body.bodyInfo == '') {
      res.json({success: false, message: 'Ensure, title and body were provided.'});
    } else {
      post.save(function(err) {
        if (err) {

          if (err.errors != null) {

            if (err.errors.title) {
              res.json({success: false, message: err.errors.title.message});
            } else if (err.errors.bodyInfo) {
              res.json({success: false, message: err.errors.bodyInfo.message});
            } else {
              res.json({success: false, message: err});
            }

          } else if (err) {
            res.json({success: false, message: err});
          }

        } else {
          res.json({success: true, message: 'Post created.'});
        }
      });
    }
  });

  router.post('/comment', function(req, res) {
    if (!req.body.comment || !req.body.commentor) {
      res.json({success: false, message: 'No comment provided'});
    } else {

      if (!req.body.id) {
        res.json({success: false, message: 'No id provided'});
      } else {

        Post.findOne({_id: req.body.id}).select().exec(function(err, post) {

          if (err) {
            res.json({success: false, message: 'Invalid post id'});
          } else {
            if (!post) {
              res.json({success: false, message: 'Post not found'});
            } else {
              post.comments.push({
                comment: req.body.comment,
                commentor: req.body.commentor
              });
              post.save(function(err) {
                if (err) {
                  res.json({success: false, message: 'Comment not saved'});
                } else {
                  res.json({success: true, message: 'Comment saved'});
                }
              });
            }
          }

        });

      }

    }
  });

  // get all posts in order of most recent
  router.get('/allPosts', function(req, res) {
    Post.find({}).sort({'_id': -1}).select().exec(function(err, posts) {
      if (err) {
        res.json({success: false, message: err});
      } else {
        if (!posts) {
          res.json({success: false, message: 'No posts found'});
        } else {
          res.json({success: true, posts: posts});
        }
      }
    });
  });

  // adds user to database route
  router.post('/users', function(req, res) {
    var user = new User();
    // gets info from input and sets it
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
    // find user by given email
    User.findOne({email: req.body.email}).select('email name password').exec(function(err, user) {
      if (err) throw err;

      // check to see if a user with this email was found
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

  // sends email to user with link to password reset page only available with token sent through email
  router.put("/resetpassword", function(req, res) {
    // check to see if user exists
    User.findOne({email: req.body.email}).select('email resettoken').exec(function(err, user) {
      if (err) throw err;
      if(!user) {
        res.json({success: false, message: 'Email was not found'});
      } else {
        // create token user can use to reset password; token expires after 24 hours
        user.resettoken = jwt.sign({email: user.email}, secret, {expiresIn: '24h'});
        user.save(function(err) {
          if (err) {
            res.json({success: false, message: err});
          } else {
            // the email to be sent to the user
            var email = {
              from: 'Belief the #MeToo Website, beliefmetoo@gmail.com',
              to: user.email,
              subject: 'Belief Reset Password Request',
							text: 'Hello, you recently requested a password reset link. Please click on the link below to reset your password:<br><br><a href="http://localhost:8080/reset/' + user.resettoken,
							html: 'Hello, you recently requested a password reset link. Please click on the link below to reset your password:<br><br><a href="http://localhost:8080/reset/' + user.resettoken + '">http://localhost:8080/reset/</a>'
						};

            // sends the email
            client.sendMail(email, function(err, info) {
              if (err) console.log(err);
            });

            // report success to front end
            res.json({success: true, message: 'Check email to reset password'});
          }
        });
      }
    });
  });

  // handles when users click the password reset link in email
  router.get("/resetpassword/:token", function(req, res) {
    // find user based on token given
    User.findOne({resettoken: req.params.token}).select().exec(function(err, user) {
      if (err) throw err;
      var token = req.params.token;

      // make sure token is valid
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

  // changes password in database when password reset
  router.put("/savepassword", function(req, res) {
    // finds correct user
    User.findOne({email: req.body.email}).select('email password resettoken').exec(function(err, user) {
      if (err) throw err;

      // makes sure password was input
      if (req.body.password == null || req.body.password == '') {
        res.json({success: false, message: 'No password provided'});
      } else {
        user.password = req.body.password;

        // resets token
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

  // gets token for specific user to be remembered after login
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
