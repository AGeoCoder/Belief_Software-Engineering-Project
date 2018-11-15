var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var titleValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Title should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

var bodyValidator = [
  validate({
    validator: 'isLength',
    arguments: [5, 1000],
    message: 'Body should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

var PostSchema = new Schema({
  title: {type: String, required: true, validate: titleValidator},
  bodyInfo: {type: String, required: true, validate: bodyValidator},
  createdBy: {type: String},
  createdAt: {type: Date, default: Date.now()},
  comments: [{
    comment: {type: String},
    commentor: {type: String}
  }]
});

module.exports = mongoose.model('Post', PostSchema);
