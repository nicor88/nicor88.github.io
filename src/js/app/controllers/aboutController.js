'use strict';

angular.module('blog').controller('aboutController',
  ['$scope', '$rootScope',
    function ($scope, $rootScope) {
      $rootScope.$emit('rootScope:emit', 'About');
    }]);
