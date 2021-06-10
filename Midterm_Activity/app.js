(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
    $scope.name = "Little Cat";
    $scope.stateOfBeing = "Sleepy";

    $scope.sayMessage = function () {
        return "Cat wants to sleep";
    };

    $scope.makeSleep = function () {
        $scope.stateOfBeing = "Sleeping";
    };
}


})();