'use strict';

angular.module('blog').controller('menuController',
  ['$scope', '$rootScope', '$location', 'entryPointsFactory',
    function ($scope, $rootScope, $location, entryPointsFactory) {
      var selectEntryPoint = function(entryPoints, pointName) {
        angular.forEach(entryPoints, function(p) {
          if (p.name === pointName) {
            p.isActive = true;
          } else {
            p.isActive = false;
          }
        });
      };
      $scope.menuTemplate = 'templates/menu.html';
      $scope.entryPoints = entryPointsFactory.getMenuEntryPoints();

      $scope.go = function(point) {
        selectEntryPoint($scope.entryPoints, point.name);
        $location.path(point.link);
      };
      $scope.isActive = function(point) {
        return point.isActive;
      };
      $rootScope.$on('rootScope:emit', function(event, pointName) {
        selectEntryPoint($scope.entryPoints, pointName);
      });
    }]);
