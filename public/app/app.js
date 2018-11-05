angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices', 'emailController', 'articleController'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
