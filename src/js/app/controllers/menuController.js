'use strict';

angular.module('blog').controller('menuController',
  ['$scope',
    function ($scope) {
      $scope.menuTemplate = 'templates/menu.html';
      $scope.blogName = "nicor88";
    }]);
