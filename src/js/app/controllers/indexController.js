(function() {
  'use strict';
  var indexController = function($scope, $rootScope, $location) {
    $scope.welcomeMessage = "nicor88 Blog";
  };
  indexController.$inject = ['$scope', '$rootScope', '$location'];
  angular.module('blog').controller('indexController', indexController);
}());
