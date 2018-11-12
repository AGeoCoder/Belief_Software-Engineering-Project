
var app = angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices','emailController', 'commController','articleController','tabbarController'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
