<<<<<<< HEAD
var app = angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices','articleController','tabbarController',"tabbarController"])
=======
angular.module('userApp', ['appRoutes', 'userControllers', 'userServices', 'primaryController', 'authServices', 'emailController', 'commController', 'articleController'])
>>>>>>> 50e34ce66529e168f67f8a0317c2a9148a86798a

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptors');
});
