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

angular.module('blog').controller('aboutController',
  ['$scope', '$rootScope',
    function ($scope, $rootScope) {
      $rootScope.$emit('rootScope:emit', 'About');
    }]);

'use strict';

angular.module('blog').controller('indexController',
  ['$scope', '$rootScope',
    function ($scope, $rootScope) {
      $rootScope.$emit('rootScope:emit', 'Home');
    }]);

'use strict';

angular.module('blog').controller('menuController',
  ['$scope', '$rootScope', '$location', 'entryPointsFactory',
    function ($scope, $rootScope, $location, entryPointsFactory) {
      var selectEntryPoint = function(entryPoints, pointName) {
        angular.forEach(entryPoints, function(p) {
          if (p.name === pointName) {
            p.isActive = true;
          } else {
            p.isActive = false;
          }
        });
      };
      $scope.menuTemplate = 'templates/menu.html';
      $scope.entryPoints = entryPointsFactory.getMenuEntryPoints();

      $scope.go = function(point) {
        selectEntryPoint($scope.entryPoints, point.name);
        $location.path(point.link);
      };
      $scope.isActive = function(point) {
        return point.isActive;
      };
      $rootScope.$on('rootScope:emit', function(event, pointName) {
        selectEntryPoint($scope.entryPoints, pointName);
      });
    }]);

angular.module('blog').provider('$routingConfig', function() {
  var routes = {};
  routes.index = {
    state: 'index',
    title: 'nicor88 Blog',
    url: '/',
    templateUrl: 'templates/main.html',
    controller: 'indexController'
  };
  routes.about = {
    state: 'about',
    title: 'nicor88 About',
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutController'
  };
  return {
    $get: function() {
      return routes;
    }
  };
});

'use strict';

angular.module('blog').factory('entryPointsFactory',
  [function() {
    var factory = {};
    factory.getMenuEntryPoints = function() {
      return [
        { name: 'About', link: '/about', isActive: false },
        { name: 'Home', link: '/', isActive: false }
      ];
    };
    return factory;
    }]);
