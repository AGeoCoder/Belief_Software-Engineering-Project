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
})

// checks whether two passwords match on registration
.directive('match', function() {
  return {
    restrict: 'A',
    controller: function($scope) {

      $scope.confirmed = false;

      $scope.doConfirm = function(values) {
        values.forEach(function(ele) {

          if ($scope.confirm == ele) {
            $scope.confirmed = true;
          } else {
            $scope.confirmed = false;
          }
        });
      }
    },

    link: function(scope, element, attrs) {
      // parse data from first password field whenever something is typed and asks if it matches other field
      attrs.$observe('match', function() {
        scope.matches = JSON.parse(attrs.match);
        scope.doConfirm(scope.matches);
      });

      // parse data from second password field whenever something is typed and asks if it matches other field
      scope.$watch('confirm', function() {
        scope.matches = JSON.parse(attrs.match);
        scope.doConfirm(scope.matches);
      });
    }
  };
});
