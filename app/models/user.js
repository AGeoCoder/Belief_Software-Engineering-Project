var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');

// makes sure name only contains letters
var nameValidator = [
  validate({
    validator: 'matches',
    arguments: /^[a-zA-Z_ ]+$/,
    message: 'Name must contain no special characters or numbers'
  })
];

var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Is not a valid email'
  }),

  validate({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

var passwordValidator = [
  validate({
    validator: 'matches',
    arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*[\W]).{8,35}$/,
    message: 'Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character, and be between 8 and 35 characters'
  }),

  validate({
    validator: 'isLength',
    arguments: [8, 35],
    message: 'Password should be between 8 and 35 characters'
  })
];

var UserSchema = new Schema({
  email: { type: String, lowercase: true, required: true, unique: true, validate: emailValidator },
  password: { type: String, required: true, validate: passwordValidator },
  name: { type: String, required: true, validate: nameValidator },
  resettoken: { type: String, required: false}
});

// encrypt password
UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

// capitalizes name in standard title way
UserSchema.plugin(titlize, {
  paths: ['name']
});

UserSchema.methods.comparePassword = function(password) {
  // compare password user has provided from login to this user's password
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
