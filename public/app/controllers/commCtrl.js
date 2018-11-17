angular.module('commController', ['postServices', 'authServices', 'primaryController'])

.controller('commCtrl', function($http, $location, $scope, Post, Auth) {
  var app = this;
  app.hide = true;
  this.newComment = [];

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
      app.createData.createdBy = data.data.name;

      Post.create(app.createData).then(function(data) {
        if (data.data.success) {
          // show success Message
          //app.successMsg = data.data.message;
          app.hide = true;
          document.getElementById('title').value = '';
          document.getElementById('bodyInfo').value = '';
        } else {
          // show error message
          app.errorMsg = data.data.message;
        }
      });
    });
  };

  app.getPosts();
});
