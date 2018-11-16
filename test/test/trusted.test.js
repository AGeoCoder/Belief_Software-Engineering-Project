// describe('Test trusted filter', function () {
//   'use strict';
//
//   beforeEach(module('userApp'));
//
//
//   var $filter;
//
//   inject(function (_$filter_) {
//     $filter = _$filter_;
//   });
//
//   it('should be trusted', function () {
//     // Arrange.
//     result = $filter('trusted')('example URL')
//     expect($sce.getTrustedHtml(result)).toEqual('example URL');
//   });
// });

describe('trusted', function() {
  describe('trusted', function() {
    var createFilter;

    beforeEach(module('userApp'));

    beforeEach(inject(function($filter) {
      createFilter = function() {
        return $filter('trusted');
      };
    }));

    it('should reverse', function() {
      var filter = createFilter();
      expect(filter("test")).toBe("test");
    });
  });
});

// describe('trusted filter', function() {
//
//   var $filter;
//
//   beforeEach(inject(function(_$filter_){
//     $filter = _$filter_;
//   }));
//
//   // var $sce;
//   //
//   // beforeEach(inject(function ($injector) {
//   //     $sce = $injector.get('$sce');
//   // }));
//
//   it('URL remains the same', function() {
//     var filter = $filter('trusted')('test');
//     expect(filter('test')).toEqual('test');
//   });
//
// });

// describe('Test trusted filter', function () {
//   'use strict';
//
//   var $sce;
//
//   beforeEach(inject(function ($injector) {
//       $sce = $injector.get('$sce');
//   }));
//
//   var $filter;
//
//   beforeEach(function () {
//     module('trusted');
//
//     inject(function (_$filter_) {
//       $filter = _$filter_;
//     });
//   });
//
//   it('should be trusted', function () {
//     // Arrange.
//     var foo = 'hello world', result;
//
//     // Act.
//     result = $filter('trusted')('example URL')
//     expect($sce.getTrustedHtml(result)).toEqual('example URL');
//   });
// });
