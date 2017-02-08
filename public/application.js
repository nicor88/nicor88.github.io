angular.module('blog',
  ['ui.router']);
/**
 * SPA entry points routing
 */
angular.module('blog').config(['$stateProvider', '$urlRouterProvider', '$routingConfigProvider',
  function($stateProvider, $urlRouterProvider, $routingConfigProvider) {
    var routes = $routingConfigProvider.$get();
    $urlRouterProvider.otherwise('/');
    angular.forEach(routes, function(route, i) {
      $stateProvider.state(routes[i].state, routes[i]);
    });
  }]);

/**
 * Function to set the page title based on $state change
 */
angular.module('blog').run(['$rootScope', '$state', '$timeout', function($rootScope, $state) {
  $rootScope.$on('$stateChangeSuccess', function() {
    if (angular.isUndefined($state.current.title)) {
      document.title = 'nicor88 Blog';
    } else {
      document.title = $state.current.title;
    }
  });
}]);

(function() {
  'use strict';
  var indexController = function($scope, $rootScope, $location) {
    $scope.welcomeMessage = "nicor88 Blog";
  };
  indexController.$inject = ['$scope', '$rootScope', '$location'];
  angular.module('blog').controller('indexController', indexController);
}());

angular.module('blog').provider('$routingConfig', function() {
  var routes = {};
  routes.index = {
    state: 'index',
    title: 'nicor88 Blog',
    url: '/',
    templateUrl: 'templates/index.html',
    controller: 'indexController'
  };
  return {
    $get: function() {
      return routes;
    }
  };
});
