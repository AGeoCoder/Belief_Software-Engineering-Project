it('should have home route with right template, controller and a resolve block', function () {
  //module('appRoutes', ['ngRoute'])
  var testApp=angular.module('appRoutes', ['/']);
  var testRoute = testApp;
  
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/education.html');
  console.log(testApp.templateUrl);
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});

it('should have article route with right template, controller and a resolve block', function () {
  //module('appRoutes', ['ngRoute'])
  var testApp=angular.module('appRoutes', ['/article/:articleID']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.controller).toEqual('articleCtrl');
  expect(testRoute.templateUrl).toEqual('app/views/pages/article.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});

it('should have resources route with right template, controller and a resolve block', function () {
   var testApp=angular.module('appRoutes', ['/resources']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/resources.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});

it('should have main page route with right template, controller and a resolve block', function () {
   var testApp=angular.module('appRoutes', ['/main']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/main.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});

it('should have history page route with right template, controller and a resolve block', function () {
   var testApp=angular.module('appRoutes', ['/history']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/history.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});

it('should have community page route with right template, controller and a resolve block', function () {
   var testApp=angular.module('appRoutes', ['/community']);
  var testRoute = testApp;
  expect(testRoute).toBeDefined();
  expect(testRoute.templateUrl).toEqual('app/views/pages/community.html');
  //expect(homeRoute.resolve.bootstrap).toBeDefined();
});

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






