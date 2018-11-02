app.controller('tabbarController',['$scope',function($scope){
  $scope.options = [
    {
      title: 'Education',
      link: "/"
    },
    {
      title: 'Community',
      link: "#community"
    },
    {
      title: 'Home',
      link: "/"
    },
    {
      title: 'Me',
      link: "/login"
    },
    {
      title: 'About',
      link: "#about"
    }
  ];

  $scope.selected = 'none';
  $scope.logoUrl ='assets/img/tabbar/Logo_white.png'

  $scope.select = function(name){
    $scope.selected = name;
  };





}])
