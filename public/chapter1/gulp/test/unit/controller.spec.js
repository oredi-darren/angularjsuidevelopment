(function() {
    'use strict';
    /* jshint mocha: true */
    /* global inject, expect */
    describe('controller specs', function() {
        var $scope;
        beforeEach(module('myApp.controllers'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('helloWorldCtrl', {
                $scope: $scope
            });
        }));

        it('should create "name" model with first name "Jane"', function() {
            expect($scope.name.first).to.equal('Jane');
        });
    });
})();
