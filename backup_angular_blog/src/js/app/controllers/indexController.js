'use strict';

angular.module('blog').controller('indexController',
  ['$scope', '$rootScope', '$location', '$stateParams', 'blogFactory',
    function ($scope, $rootScope, $location, $stateParams, blogFactory) {
      $rootScope.$emit('rootScope:emit', 'Home');
      $scope.go = function(link) {
        $location.path(link);
      };
      $scope.articles = blogFactory.getArticles();

      // section needed if for some speecific article is needed to call a factory
      if (angular.isDefined($stateParams.article)) {
        console.log($stateParams.article);
        $rootScope.$emit('rootScope:emit', 'Articles');
      }
    }]);
