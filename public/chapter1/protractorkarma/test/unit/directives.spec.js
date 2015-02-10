(function(){
	'use strict';
	describe('controller specs', function () {
		var $scope;
		beforeEach(module('myApp.directives'));

		beforeEach(inject(function($rootScope){
			$scope = $rootScope.$new();
			$scope.name = { first: 'John', last: 'Doe' }
		}));

		describe('hello-world', function () {
			it('should contain the provided name', function () {
				inject(function($compile) {
					var element = $compile('<div hello-world name="name"></div>')($scope);
					$scope.$digest();
					expect(element.html()).to.contain('John');
				});
			});
		});
	});
})();