
var app = angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'postServices', 'primaryController', 'authServices','emailController', 'commController','articleController', 'mainController', 'historyController'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
