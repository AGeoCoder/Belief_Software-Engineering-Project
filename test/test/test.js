describe('Test route config', function() {

  beforeEach(function(){
    module('appRoutes');
    module('authServices');
    module(function ($provide) {
      $provide.value('Auth', true);

    });

  })

  it('should test routeProvider', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/education.html').respond(200);
      $location.path('/');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/education.html');


    });

  });
  it('should have article route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/article.html').respond(200);
      $location.path('/article/:articleID');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/article.html');


    });

  });
  it('should have resources route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/resources.html').respond(200);
      $location.path('/resources');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/resources.html');


    });

  });

  it('should have main page route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.whenGET("app/views/pages/users/login.html").respond(200);

      //$httpBackend.whenGET('app/views/pages/main.html').respond(200);
      $location.path('/main');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/main.html');


    });

  });

  it('should have history page route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/history.html').respond(200);
      $location.path('/history');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/history.html');


    });

  });

  it('should have community page route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/community.html').respond(200);
      $location.path('/community');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/community.html');


    });

  });

  it('should have report page route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/reports.html').respond(200);
      $location.path('/reports');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/reports.html');


    });

  });

  it('should have login page route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/users/login.html').respond(200);
      $location.path('/login');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/users/login.html');


    });

  });

  it('should have createUser page route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/login.html').respond(200);
      $location.path('/login');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/login.html');


    });

  });

  it('should have createUser page route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/users/createuser.html').respond(200);
      $location.path('/createuser');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/users/createuser.html');


    });

  });

  it('should have logout page route with right template, controller and a resolve block', function() {

    inject(function($route, $location, $rootScope, $httpBackend) {
      expect($route.current).toBeUndefined();

      $httpBackend.expectGET('app/views/pages/users/logout.html').respond(200);
      $location.path('/logout');
      $rootScope.$digest();

      expect($route.current.templateUrl).toBe('app/views/pages/users/logout.html');


    });

  });


});




/*



it('should have report page route with right template, controller and a resolve block', function () {
   var testApp=angular.module('appRoutes', ['/reports']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/reports.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});


it('should have login page route with right template, controller and a resolve block', function () {
   var testApp=angular.module('appRoutes', ['/login']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/users/login.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});

it('should have createruser page route with right template, controller and a resolve block', function () {
   var testApp=angular.module('appRoutes', ['/createuser']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/users/createuser.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});

it('should have logout page route with right template, controller and a resolve block', function () {
   var testApp=angular.module('appRoutes', ['/logout']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/users/logout.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});
*/
