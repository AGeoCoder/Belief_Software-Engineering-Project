angular.module('postServices', [])

.factory('Post', function($http) {
  var postFactory = {};

  // can call Post.create(createData) to create a new post
  postFactory.create = function(createData) {
    return $http.post('/api/posts', createData);
  }

  postFactory.commentCreate = function(commentData) {
    return $http.post('/api/comment', commentData);
  }

  postFactory.allPosts = function() {
    return $http.get('/api/allPosts');
  }

  postFactory.recentPosts = function() {
    return $http.get('/api/recentPosts');
  }

  postFactory.myPosts = function() {
    return $http.get('/api/myPosts');
  }

  return postFactory;
});
