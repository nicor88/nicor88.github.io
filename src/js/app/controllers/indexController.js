'use strict';

angular.module('blog').controller('indexController',
  ['$scope',
    function ($scope) {
      $scope.welcomeMessage = "Blog";
    }]);
