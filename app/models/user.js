var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  email: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true }
});

// encrypt password
UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.methods.comparePassword = function(password) {
  // compare password user has provided from login to this user's password
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
