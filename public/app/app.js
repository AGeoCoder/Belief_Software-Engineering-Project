angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices'])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
