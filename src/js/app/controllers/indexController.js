'use strict';

angular.module('blog').controller('indexController',
  ['$scope', '$rootScope', '$location', 'blogFactory',
    function ($scope, $rootScope, $location, blogFactory) {
      $rootScope.$emit('rootScope:emit', 'Home');
      $scope.go = function(link) {
        $location.path(link);
      };
      $scope.articles = blogFactory.getArticles();
    }]);
