'use strict';

angular.module('blog').controller('indexController',
  ['$scope', '$rootScope',
    function ($scope, $rootScope) {
      $rootScope.$emit('rootScope:emit', 'Home');
    }]);
