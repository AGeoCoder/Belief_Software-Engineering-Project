/* route provider module */

var router = angular.module('appRoutes', ['ngRoute'])

router.config(function($routeProvider, $locationProvider) {
  // when user enters .com/, site sends them to education.html
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/pages/education.html'
  })
  // Education related routing:
  .when('/article', {
    templateUrl: 'app/views/pages/article.html',
  })
  .when('/resources', {
    templateUrl: 'app/views/pages/resources.html',
  })

  // Main
  .when('/main', {
    templateUrl: 'app/views/pages/main.html'
  })
  // Login related routing:
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
