angular.module('primaryController', ['authServices'])

.controller('primaryCtrl', function(Auth, $location) {
  var app = this;



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
        // redirect to education page
        $location.path('/');
      } else {
        app.loading = false;
        // show error message
        app.errorMsg = data.data.message;
      }
    });
  };
});
