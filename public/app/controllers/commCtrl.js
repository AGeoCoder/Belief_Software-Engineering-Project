angular.module('commController', [])

.controller('commCtrl', function() {
  var app = this;
  app.hide = true;

  app.createPost = function() {
    app.hide = false;
  };
});
