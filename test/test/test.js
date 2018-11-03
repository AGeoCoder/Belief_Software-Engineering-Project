t('should have home route with right template, controller and a resolve block', function () {
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






