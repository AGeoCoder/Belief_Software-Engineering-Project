app.directive('tabbar',function(){
  return{
    restrict: 'E',
    scope:{
      info: '='
    },
    templateUrl: 'app/views/directives/tabbar.html'
  };
});
