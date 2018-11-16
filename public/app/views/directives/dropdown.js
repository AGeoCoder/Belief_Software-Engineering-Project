app.directive('eduDrop', function() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    template: '<div> My name is {{test}}</div>'
    //templateUrl: 'app/views/directives/dropdown.html',

  };
});
