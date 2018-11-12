
var app = angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices','articleController','tabbarController',"tabbarController"])


.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
