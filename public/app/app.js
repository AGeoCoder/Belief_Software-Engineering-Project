var app = angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices','articleController'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
