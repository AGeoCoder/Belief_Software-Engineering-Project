angular.module('postServices', [])

.factory('Post', function($http) {
  var postFactory = {};

  // can call Post.create(createData) to create a new post
  postFactory.create = function(createData) {
    return $http.post('/api/posts', createData);
  }

  return postFactory;
});
