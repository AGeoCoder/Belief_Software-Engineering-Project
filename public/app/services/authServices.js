angular.module('authServices', [])

.factory('Auth', function($http, AuthToken) {
  var authFactory = {};

  // can call Auth.login(createData) to login a user
  authFactory.login = function(loginData) {
    return $http.post('/api/authenticate', loginData).then(function(data) {
      AuthToken.setToken(data.data.token);
      return data;
    });
  };

  // return true if user is logged in currently, else false
  authFactory.isLoggedIn = function() {
    if (AuthToken.getToken()) {
      return true;
    } else {
      return false;
    }
  };

  // returns specific user
  authFactory.getUser = function() {
    if (AuthToken.getToken()) {
      return $http.post('/api/me');
    } else {
      $q.reject({message: 'User has no token'});
    }
  };

  // logs user out
  authFactory.logout = function() {
    AuthToken.setToken();
  };

  return authFactory;
})

.factory('AuthToken', function($window) {
  var authTokenFactory = {};

  // can call AuthToken.setToken(token) to save session on local machine in cookie
  authTokenFactory.setToken = function(token) {
    if (token) {
      $window.localStorage.setItem('token', token);
    } else {
      // if no token provided, logs user out
      $window.localStorage.removeItem('token');
    }
  };

  authTokenFactory.getToken = function() {
    return $window.localStorage.getItem('token');
  };

  return authTokenFactory;
})

.factory('AuthInterceptors', function(AuthToken) {
  var authInterceptorsFactory = {};

  authInterceptorsFactory.request = function(config) {
    var token = AuthToken.getToken();

    if (token) config.headers['x-access-token'] = token;

    return config;
  };

  return authInterceptorsFactory;
});
