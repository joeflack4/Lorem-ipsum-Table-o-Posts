/* 
  Basic scaffolding for Angular.js tests using Jasmine.
*/

describe('tableOfPostsController', function() {

  // Angular.js test boilerplate.
  beforeEach(module('app'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  // Tests
  describe('$scope.sortType', function() {
    it('checks default sort variables', function() {
      var $scope = {};
      var controller = $controller('tableOfPostsController', { $scope: $scope });
      expect($scope.sortType).toEqual('id');
    });
  });
 
});
