angular.module('tabbarController', [])
.controller('tabbarCtrl',['$scope',function($scope){


  $scope.selected = 'none';
  $scope.logoUrl ='assets/img/tabbar/Logo_white.png';

  $scope.select = function(name){
    $scope.selected = name;
  };





}])
