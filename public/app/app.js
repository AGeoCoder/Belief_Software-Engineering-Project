angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices', 'emailController', 'commController', 'articleController'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
