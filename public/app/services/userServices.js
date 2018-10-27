angular.module('userServices', [])

.factory('User', function($http) {
  userFactory = {};

  // can call User.create(createData) to create a new user
  userFactory.create = function(createData) {
    return $http.post('/api/users', createData);
  }

  return userFactory;
});
