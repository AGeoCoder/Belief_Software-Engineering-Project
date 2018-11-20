angular.module('historyController', ['postServices', 'authServices'])

.controller('historyCtrl', function($http, $location, $scope, Post, Auth) {
  var app = this;
  this.newComment = [];

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
