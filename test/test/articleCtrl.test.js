describe('articleController', function(){
  beforeEach(angular.mock.module('articleController'));

  var $controller, $routeParams;

  beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

  describe('articleController test', function () {
		it('what is sexual assault test', function () {
			var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
			var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'What_is_sexual_assault'}});
      //expect(1).toBe(1);
			//expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('What_is_sexual_assault');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/What_is_sexual_assault.html');
      expect($scope.relatedURL).toEqual('/article/Intimate_Partner_Sexual_Violence');
      expect($scope.relatedTitle).toEqual('Intimate Partner Sexual Violence');
    });

    it('intimate partner test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'Intimate_Partner_Sexual_Violence'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('Intimate_Partner_Sexual_Violence');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/Intimate_Partner_Sexual_Violence.html');
      expect($scope.relatedURL).toEqual('/article/What_is_sexual_assault');
      expect($scope.relatedTitle).toEqual('What is sexual assault');
      expect($scope.hide).toEqual(true);
    });

    it('depression test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'Depression'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('Depression');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/Depression.html');
      expect($scope.relatedURL).toEqual('/article/Flashbacks');
      expect($scope.relatedTitle).toEqual('Flashbacks');
    });

    it('Flashbacks test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'Flashbacks'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('Flashbacks');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/Flashbacks.html');
      expect($scope.relatedURL).toEqual('/article/Depression');
      expect($scope.relatedTitle).toEqual('Depression');
    });

    it('PTSD test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'PTSD'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('PTSD');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/PTSD.html');
      expect($scope.relatedURL).toEqual('/article/Depression');
      expect($scope.relatedTitle).toEqual('Depression');
    });

    it('Consent test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'Consent'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('Consent');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/Consent.html');
      expect($scope.relatedURL).toEqual('/article/Legal');
      expect($scope.relatedTitle).toEqual('Legal Role of Consent');
    });

    it('Legal test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'Legal'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('Legal');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/Legal.html');
      expect($scope.relatedURL).toEqual('/article/Consent');
      expect($scope.relatedTitle).toEqual('What Consent Looks Like');
    });

    it('Wisconsin test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'Wisconsin'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('Wisconsin');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/Wisconsin.html');
      // expect($scope.relatedURL).toEqual('/article/Consent');
      // expect($scope.relatedTitle).toEqual('What Consent Looks Like');
    });

    it('Illinois test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'Illinois'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('Illinois');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/Illinois.html');
      // expect($scope.relatedURL).toEqual('/article/Consent');
      // expect($scope.relatedTitle).toEqual('What Consent Looks Like');
    });

    it('Minnesota test', function () {
      var $scope = {};
      //$routeParams.articleID = 'test';
      //var routeParams.articleID = 'What_is_sexual_assault';
      var controller = $controller('articleCtrl', { $scope: $scope, $routeParams: {articleID: 'Minnesota'}});
      //expect(1).toBe(1);
      //expect($scope.greeting).toEqual('Hola!');
      expect($scope.articleID).toEqual('Minnesota');
      expect($scope.articleURL).toEqual('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/Minnesota.html');
      expect($scope.hide).toEqual(false);
      // expect($scope.relatedURL).toEqual('/article/Consent');
      // expect($scope.relatedTitle).toEqual('What Consent Looks Like');
    });



	});
});


// describe('userApp', function () {
//
//   beforeEach(module('userApp'));
//
//    var $controller, $rootScope;
//
//    beforeEach(inject(function(_$controller_, _$rootScope_){
//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     $controller = _$controller_;
//     $rootScope = _$rootScope_;
//   }));
//
//   describe('Test', function() {
//     it('hide is false', function() {
//       var $scope = $rootScope.$new();
//       //var controller = $controller('articleController',{$scope: $scope});
//       //var controller = $controller('articleController', { $scope: $scope });
//       expect(1).toBe(1);
//
//     });
//   });
// });









// test routing works as expected

// describe("testing", function(){
//   it("contains spec",function() {
//     expect(true).toBe(true);
//   });
// });




//
//
// fdescribe("articleController", function(){
//   fit("should set url to id", function(){
//     var articleCtrl = ArticleCtrl({articleID:'10'});
//     expect(articleCtrl.articleID).toEqual('10');
//     expect(articleCtrl.articleURL).toBe('https://cdn.rawgit.com/amgreenstreet/BeliefMeToo/master/public/articles/10.txt');
//   });
// });

// describe('Testing Routes', function () {
//
// // load the controller's module
//   beforeEach(angular.module('appRoutes'));
//
//   it('should test routes', inject(function ($route) {
//     expect($route.routes['/'].controller).toBe('MainCtrl');
//     expect($route.routes['/'].templateUrl).toEqual('app/views/main.html');
//
//     expect($route.routes['/home/:PartyID'].controller).toBe('HomeCtrl');
//     expect($route.routes['/home/:PartyID'].templateUrl).toEqual('app/views/home.html');
//
//     expect($route.routes['/edit/:PartyID'].controller).toBe('EditCtrl');
//     expect($route.routes['/edit/:PartyID'].templateUrl).toEqual('app/views/update_profile.html');
//
//     expect($route.routes['/route'].controller).toBe('RouteCtrl');
//     expect($route.routes['/route'].templateUrl).toEqual('app/views/route.html');
//
//     expect($route.routes['/signup'].controller).toBe('SignupCtrl');
//     expect($route.routes['/signup'].templateUrl).toEqual('app/views/signup.html');
//
//     expect($route.routes['/streamconfigs/:id'].controller).toBe('LoginCtrl');
//     expect($route.routes['/streamconfigs/:id'].templateUrl).toEqual('app/views/login.html');
//
//     expect($route.routes[null].redirectTo).toEqual('/');
//   }));
//
// });







//var app = angular.module('appRoutes', ['ngRoute'])





// describe('Testing Routes', function () {
// // load the controller's module
// //beforeEach(module('appRoutes'));
//   // var $routeProvider;
//   // beforeEach(inject(
//   //
//   //     function( _$routeProvider_ ) {
//   //         $routeProvider = _$routeProvider_;
//   // }));
//   beforeEach(function(){
//     var app = angular.module('appRoutes');
//     // module("appRoutes", function($provide){
//     //   $provide.value("$route","ngRoute");
//     //
//     // });
//   });
//
//   it('should test routes',inject(function($route, $locationProvider) {
//     $locationProvider.path = '/';
//     expect($route.current.templateUrl).toEqual('app/views/pages/education.html');
//     // expect($route.routes['/'].controller).toBe('MainCtrl');
//     // expect($route.routes['/'].templateUrl).toEqual('app/views/main.html');
//     //
//     // expect($route.routes['/home/:PartyID'].controller).toBe('HomeCtrl');
//     // expect($route.routes['/home/:PartyID'].templateUrl).toEqual('app/views/home.html');
//     //
//     // expect($route.routes['/edit/:PartyID'].controller).toBe('EditCtrl');
//     // expect($route.routes['/edit/:PartyID'].templateUrl).toEqual('app/views/update_profile.html');
//     //
//     // expect($route.routes['/route'].controller).toBe('RouteCtrl');
//     // expect($route.routes['/route'].templateUrl).toEqual('app/views/route.html');
//     //
//     // expect($route.routes['/signup'].controller).toBe('SignupCtrl');
//     // expect($route.routes['/signup'].templateUrl).toEqual('app/views/signup.html');
//     //
//     // expect($route.routes['/streamconfigs/:id'].controller).toBe('LoginCtrl');
//     // expect($route.routes['/streamconfigs/:id'].templateUrl).toEqual('app/views/login.html');
//     //
//     // expect($route.routes[null].redirectTo).toEqual('/');
//   }));
// });
//
// describe('$routeProvider', function() {
//   var routeProvider;
//   beforeEach(inject(
//       function( _$routeProvider_ ) {
//           $routeProvider = _$routeProvider_;
//   }));
//
//
//
// });



// describe('Testing routes', function() {
//     //beforeEach(module('windscreens'));
//
//
//     var location, route, rootScope;
//
//     beforeEach(inject(
//         function( _$location_, _$route_, _$rootScope_ ) {
//             location = _$location_;
//             route = _$route_;
//             rootScope = _$rootScope_;
//     }));
//
//      describe('Login route', function() {
//         beforeEach(inject(
//             function($httpBackend) {
//                 $httpBackend.expectGET('login')
//                 .respond(200);
//             }));
//
//         it('should load the login page on successful load of /login', function() {
//             location.path('/login');
//             rootScope.$digest();
//             expect(route.current.controller).toBe('LoginCtrl')
//         });
//     });
// });



// describe('Testing Routes', function () {
//
// // load the controller's module
// //beforeEach(angular.module('appRoutes'));
//
// it('should test routes',
// inject(function ($route) {
//
//   expect($route.routes['/'].controller).toBe('MainCtrl');
//   expect($route.routes['/'].templateUrl).toEqual('app/views/main.html');
//
//   expect($route.routes['/home/:PartyID'].controller).toBe('HomeCtrl');
//   expect($route.routes['/home/:PartyID'].templateUrl).toEqual('app/views/home.html');
//
//   expect($route.routes['/edit/:PartyID'].controller).toBe('EditCtrl');
//   expect($route.routes['/edit/:PartyID'].templateUrl).toEqual('app/views/update_profile.html');
//
//   expect($route.routes['/route'].controller).toBe('RouteCtrl');
//   expect($route.routes['/route'].templateUrl).toEqual('app/views/route.html');
//
//   expect($route.routes['/signup'].controller).toBe('SignupCtrl');
//   expect($route.routes['/signup'].templateUrl).toEqual('app/views/signup.html');
//
//   expect($route.routes['/streamconfigs/:id'].controller).toBe('LoginCtrl');
//   expect($route.routes['/streamconfigs/:id'].templateUrl).toEqual('app/views/login.html');
//
//   expect($route.routes[null].redirectTo).toEqual('/');
// }));
//
// });


// describe("test1", function(){
//   it('should have home route with right template, controller and a resolve block', function () {
//      //angular.module('appRoutes')
//      var testRoute = app.routes['/'];
//      //var testRoute = route.routes['/'];
//      expect(testRoute).toBeDefined();
//      expect(testRoute.templateUrl).toEqual('app/views/pages/education.html');
//      //expect(homeRoute.resolve.bootstrap).toBeDefined();
//   });
// })


// 'use strict';
// describe('$routeProvider', function() {
//   var $routeProvider;
//
//   //beforeEach(angular.module('ngRoute'));
//   beforeEach(angular.module(function(_$routeProvider_) {
//     $routeProvider = _$routeProvider_;
//     $routeProvider.when('/foo', {template: 'Hello, world!'});
//   }));
//
//   it('should allow redirects while handling $routeChangeStart', function() {
//     module(function($routeProvider) {
//       $routeProvider.when('/some', {
//         id: 'some', template: 'Some functionality'
//       });
//       $routeProvider.when('/redirect', {
//         id: 'redirect'
//       });
//     });
//   });
// });




//
// it('should have article route with right template, controller and a resolve block', function () {
//    module('appRoutes', ['ngRoute'])
//    var testRoute = route.routes['/article/:articleID'];
//    expect(testRoute).toBeDefined();
//    expect(testRoute.controller).toEqual('articleCtrl');
//    expect(testRoute.templateUrl).toEqual('app/views/pages/article.html');
//    //expect(homeRoute.resolve.bootstrap).toBeDefined();
// });
//
// it('should have resources route with right template, controller and a resolve block', function () {
//    module('appRoutes', ['ngRoute'])
//    var testRoute = route.routes['/resources'];
//    expect(testRoute).toBeDefined();
//    expect(testRoute.templateUrl).toEqual('app/views/pages/resources.html');
//    //expect(homeRoute.resolve.bootstrap).toBeDefined();
// });
