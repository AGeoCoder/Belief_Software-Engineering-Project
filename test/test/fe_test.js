describe('Front-end testing', function () {
  //beforeEach(module('calculatorApp'));
  var $rootScope, $createController;

  //module app first
  beforeEach(function(){
    module('userApp');
    module('dropDownController');
  });


  describe('eduDropCtrl',function(){
    beforeEach(inject(function(_$rootScope_,_$controller_){
      $rootScope = _$rootScope_;
      $createController = _$controller_;
    }));

    it('eduDropCtrl is working',function(){
      var $scope = $rootScope.$new();
      var controller = $createController('eduDropCtrl',{$scope: $scope});
    });
  })


  //inject fake controllers and other stuffs
  describe('tabbarCtrl',function(){
    beforeEach(inject(function(_$rootScope_,_$controller_){
      //$location = _$location_;

      $rootScope = _$rootScope_;
      $createController = _$controller_;

    }));

    //real testing part
    it('tabCtrl is working', function () {
      var $scope = $rootScope.$new();
      var controller = $createController('tabbarCtrl',{$scope: $scope});
      console.log($scope.test);
      expect($scope.options[0].testing).toBe(222);
    });

    afterEach(function(){
      $rootScope = null;
      $createController = null;
    });
  });
});
