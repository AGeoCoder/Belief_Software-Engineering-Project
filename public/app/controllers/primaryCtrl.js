angular.module('primaryController', ['authServices'])

.controller('primaryCtrl', function(Auth, $timeout, $location, $rootScope) {
  var app = this;

  // browsers load html then angular so waiting until loadme is true prevents browser from
  // showing login and logout buttons for half a second before hiding one
  app.loadme = false;

  // every time view is changed, checks to see if user is logged in
  $rootScope.$on('$routeChangeStart', function() {
    if (Auth.isLoggedIn()) {
      app.isLoggedIn = true;
      Auth.getUser().then(function(data) {
        // makes name and email accessible through primary.name
        app.name = data.data.name;
        app.email = data.data.email;
        app.loadme = true;
      });
    } else {
      app.isLoggedIn = false;
      app.name = '';
      app.email = '';
      app.loadme = true;
    }
  });

  this.doLogin = function(loginData) {
    // shows loading icon while true
    app.loading = true;
    app.errorMsg = false;

    // sends data to app/routes/api.js
    Auth.login(app.loginData).then(function(data) {
      if (data.data.success) {
        app.loading = false;
        // show success Message
        app.successMsg = data.data.message;
        app.loginData = '';
        app.successMsg = false;
        // redirect to education page
        $location.path('/');
      } else {
        app.loading = false;
        // show error message
        app.errorMsg = data.data.message;
      }
    });
  };

  this.logout = function() {
    Auth.logout();
    $location.path('/logout');
    $timeout(function() {
      $location.path('/');
    }, 2000);
  };
});
