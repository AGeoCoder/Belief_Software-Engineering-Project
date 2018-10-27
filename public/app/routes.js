angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  // when user enters .com/, site sends them to education.html
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/pages/education.html'
  })

  .when('/main', {
    templateUrl: 'app/views/pages/main.html'
  })

  .when('/login', {
    templateUrl: 'app/views/pages/users/login.html',
    controller: 'primaryCtrl',
    controllerAs: 'primary'
  })

  .when('/createuser', {
    templateUrl: 'app/views/pages/users/createuser.html',
    controller: 'createCtrl',
    controllerAs: 'create'
  })

  .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
