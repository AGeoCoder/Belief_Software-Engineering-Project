angular.module('userServices', [])

.factory('User', function($http) {
  var userFactory = {};

  // can call User.create(createData) to create a new user
  userFactory.create = function(createData) {
    return $http.post('/api/users', createData);
  }

  userFactory.sendPassword = function(resetData) {
    return $http.put('/api/resetpassword', resetData);
  }

  userFactory.delete = function() {
    return $http.delete('/api/delete');
  }

  userFactory.resetUser = function(token) {
    return $http.get('/api/resetpassword/' + token);
  }

  userFactory.savePassword = function(createData) {
    return $http.put('/api/savepassword', createData);
  }

  return userFactory;
});
