
app.controller('tabbarCtrl',['$scope',function($scope){
  $scope.test = 1;
  $scope.options = [
    {
      title: 'Education',
      link: "/",
      testing: 222
    },
    {
      title: 'Community',
      link: "/community"
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
  $scope.logoUrl ='assets/img/tabbar/Logo_white.png';

  $scope.select = function(name){
    $scope.selected = name;
  };





}])
