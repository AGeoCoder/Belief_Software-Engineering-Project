app.controller('animationController',['$scope',function($scope){
  $scope.test = 1;

  $scope.isActive_1 = false;
  $scope.showSelf_1 = false;

  $scope.isActive_2 = false;
  $scope.showSelf_2 = false;

  $scope.isActive_3 = false;
  $scope.showSelf_3 = false;

  $scope.isActive_4 = false;
  $scope.showSelf_4 = false;

  $scope.isActive_5 = false;
  $scope.showSelf_5 = false;


  $scope.showUp_1 = function() {
    $scope.showSelf_1 = !$scope.showSelf_1;
    $scope.isActive_1 = !$scope.isActive_1;
  }

  $scope.showUp_2 = function() {
    $scope.showSelf_2 = !$scope.showSelf_2;
    $scope.isActive_2 = !$scope.isActive_2;
  }

  $scope.showUp_3 = function() {
    $scope.showSelf_3 = !$scope.showSelf_3;
    $scope.isActive_3 = !$scope.isActive_3;
  }

  $scope.showUp_4 = function() {
    $scope.showSelf_4 = !$scope.showSelf_4;
    $scope.isActive_4 = !$scope.isActive_4;
  }

  $scope.showUp_5 = function() {
    $scope.showSelf_5 = !$scope.showSelf_5;
    $scope.isActive_5 = !$scope.isActive_5;
  }


}])
