
var app = angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'postServices', 'primaryController', 'authServices','emailController', 'commController','articleController'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
