angular.module('authServices', [])

.factory('Auth', function($http) {
  var authFactory = {};

  // can call Auth.login(createData) to login a user
  authFactory.login = function(loginData) {
    return $http.post('/api/authenticate', loginData);
  }

  return authFactory;
});
