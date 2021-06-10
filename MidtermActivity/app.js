(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
    $scope.name = "Dogie";
    $scope.stateOfBeing = "Rest";

    $scope.sayMessage = function () {
        return "Dogie wants to run";
    };

    $scope.runDogie = function () {
        $scope.stateOfBeing = "Run";
    };
}


})();