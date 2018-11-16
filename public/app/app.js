var app = angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices','articleController','dropDownController'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
