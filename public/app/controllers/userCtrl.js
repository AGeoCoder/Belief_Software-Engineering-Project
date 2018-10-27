angular.module('userControllers', ['userServices'])

.controller('createCtrl', function($http, $location, User) {
  var app = this;

  // gets new user information from front end and passes info to back end
  this.createUser = function(createData) {
    // shows loading icon while true
    app.loading = true;
    app.errorMsg = false;

    // sends data to app/routes/api.js
    User.create(app.createData).then(function(data) {
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
