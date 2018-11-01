var app = angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
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
    templateUrl: 'app/views/pages/main.html',
    authenticated: true
  })

  .when('/history', {
    templateUrl: 'app/views/pages/history.html',
    authenticated: true
  })

  .when('/community', {
    templateUrl: 'app/views/pages/community.html'
  })

  .when('/reports', {
    templateUrl: 'app/views/pages/reports.html'
  })
  // Login related routing:
  .when('/login', {
    templateUrl: 'app/views/pages/users/login.html',
    controller: 'primaryCtrl',
    controllerAs: 'primary',
    authenticated: false
  })

  .when('/createuser', {
    templateUrl: 'app/views/pages/users/createuser.html',
    controller: 'createCtrl',
    controllerAs: 'create',
    authenticated: false
  })

  .when('/logout', {
    templateUrl: 'app/views/pages/users/logout.html',
    controller: 'primaryCtrl',
    controllerAs: 'primary',
    authenticated: true
  })

  .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

// for every main view, check to see if you need to be logged in to view and redirect to education if not logged in
app.run(['$rootScope', 'Auth', '$location', function($rootScope, Auth, $location) {

  $rootScope.$on('$routeChangeStart', function(event, next, current) {

    if (next.$$route.authenticated == true) {
      if (!Auth.isLoggedIn()) {
        event.preventDefault();
        $location.path('/login');
      }
    } else if (next.$$route.authenticated == false) {
      if(Auth.isLoggedIn()) {
        event.preventDefault();
        $location.path('/');
      }
    }
  });
}]);
