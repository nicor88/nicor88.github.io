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

'use strict';

angular.module('blog').controller('indexController',
  ['$scope',
    function ($scope) {
      $scope.welcomeMessage = "Blog";
    }]);

'use strict';

angular.module('blog').controller('menuController',
  ['$scope',
    function ($scope) {
      $scope.menuTemplate = 'templates/menu.html';
      $scope.blogName = "nicor88";
    }]);

angular.module('blog').provider('$routingConfig', function() {
  var routes = {};
  routes.index = {
    state: 'index',
    title: 'nicor88 Blog',
    url: '/',
    templateUrl: 'templates/index.html',
    controller: 'indexController'
  };
  routes.about = {
    state: 'about',
    title: 'nicor88 About',
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'indexController'
  };
  return {
    $get: function() {
      return routes;
    }
  };
});
