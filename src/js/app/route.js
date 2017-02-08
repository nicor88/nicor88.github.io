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
