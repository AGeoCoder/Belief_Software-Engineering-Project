angular.module('mainController', ['postServices'])

.controller('mainCtrl', function($http, $location, $scope, Post, Auth) {
  var app = this;
  app.articleURL = 'https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/What_is_sexual_assault.txt';

  this.getPosts = function() {
    Post.recentPosts().then(function(data) {
      if (data.data.success) {
        $scope.recentPosts = data.data.posts;
      } else {
        app.errorMess = data.data.message;
      }
    });
  };

  app.getPosts();
});
