angular.module('historyController', ['postServices', 'authServices'])

.controller('historyCtrl', function($http, $location, $scope, $timeout, Post, Auth, User) {
  var app = this;
  this.newComment = [];
  app.delete = false;

  this.deleteWindow = function() {
    app.delete = true;
  };

  this.cancelDelete = function() {
    app.delete = false;
  };

  this.deleteAccount = function() {
    app.error = false;

    User.delete().then(function(data) {
      if (data.data.success) {
        app.success = data.data.message;

        // logout user
        Auth.logout();
        $timeout(function() {
          $location.path('/');
        }, 2000);
      } else {
        // show error message
        app.error = data.data.message;
      }
    });
  };

  this.getPosts = function() {
    Post.myPosts().then(function(data) {
      if (data.data.success) {
        $scope.recentPosts = data.data.posts;
      } else {
        app.errorMess = data.data.message;
      }
    });
  };

  this.draftComment = function(id) {
    this.newComment = [];
    this.newComment.push(id);
  };

  this.cancelComment = function() {
    this.newComment = [];
  };

  this.createComment = function(commentData) {
    app.commentError = false;

    if (!Auth.isLoggedIn()) {
      app.commentError = 'You must be logged in to create a comment';
      return;
    }

    Auth.getUser().then(function(data) {
      app.commentData.commentor = data.data.name;
      app.commentData.id = app.newComment[0];

      Post.commentCreate(app.commentData).then(function(data) {
        if (data.data.success) {
          // show success Message
          //app.successMsg = data.data.message;
          app.cancelComment();
          app.getPosts();
        } else {
          // show error message
          app.commentError = data.data.message;
        }
      });
    });
  };

  app.getPosts();
});
