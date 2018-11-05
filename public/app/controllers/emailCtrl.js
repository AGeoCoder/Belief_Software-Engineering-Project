angular.module('emailController', ['userServices'])
.controller('passwordCtrl', function(User) {
  app = this;

  app.sendPassword = function(resetData, valid) {
    app.errorMsg = false;
    app.loading = true;

    if (valid) {
      User.sendPassword(app.resetData).then(function(data) {
        app.loading = false;

        if (data.data.success) {
          app.successMsg = data.data.message;
        } else {
          app.errorMsg = data.data.message;
        }
      });
    } else {
      app.loading = false;
      app.errorMsg = 'Please enter a valid email';
    }
  };
})

.controller('resetCtrl', function(User, $routeParams, $scope, $timeout, $location) {
  app = this;
  app.hide = true;

  User.resetUser($routeParams.token).then(function(data) {
    if (data.data.success) {
      app.hide = false;
      app.successMsg = 'Please enter a new password';
      $scope.email = data.data.user.email;
    } else {
      app.errorMsg = data.data.message;
    }
  });

  app.savePassword = function(createData, confirmed) {
    app.errorMsg = false;
    app.loading = true;

    if (confirmed) {
      app.createData.email = $scope.email;
      User.savePassword(app.createData).then(function(data) {
        app.loading = false;
        if (data.data.success) {
          app.successMsg = data.data.message+ 'Redirecting...';
          $timeout(function() {
              $location.path('/login');
          }, 2000);
        } else {
          app.errorMsg = data.data.message;
        }
      });
    } else {
      app.loading = false;
      app.errorMsg = 'Please fill in both fields properly';
    }
  };
});
