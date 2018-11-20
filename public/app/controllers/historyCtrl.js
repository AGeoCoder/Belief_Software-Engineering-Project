angular.module('historyController', ['postServices'])

.controller('historyCtrl', function($http, $location, $scope, Post, Auth) {
  var app = this;

  this.getPosts = function() {
    Post.myPosts().then(function(data) {
      if (data.data.success) {
        $scope.recentPosts = data.data.posts;
      } else {
        app.errorMess = data.data.message;
      }
    });
  };

  app.getPosts();
});
