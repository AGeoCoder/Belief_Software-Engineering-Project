angular.module('commController', ['postServices', 'authServices'])

.controller('commCtrl', function($http, $timeout, $scope, Post, Auth) {
  var app = this;
  app.hide = true;

  this.getPosts = function() {
    Post.allPosts().then(function(data) {
      if (data.data.success) {
        $scope.recentPosts = data.data.posts;
      } else {
        app.errorMess = data.data.message;
      }
    });
  };

  this.newPost = function() {
    app.hide = false;
  };

  this.cancelPost = function() {
    app.hide = true;
    document.getElementById('title').value = '';
    document.getElementById('bodyInfo').value = '';
  };

  this.createPost = function(createData) {
    app.errorMsg = false;

    if (!Auth.isLoggedIn()) {
      app.errorMsg = 'You must be logged in to create a post';
      return;
    }

    Auth.getUser().then(function(data) {
      // makes name and email accessible through primary.name
      app.createData.createdBy = data.data.name;
    });

    Post.create(app.createData).then(function(data) {
      if (data.data.success) {
        // show success Message
        //app.successMsg = data.data.message;
        app.hide = true;
        document.getElementById('title').value = '';
        document.getElementById('bodyInfo').value = '';
      } else {
        app.loading = false;
        // show error message
        app.errorMsg = data.data.message;
      }
    });
  };
});
