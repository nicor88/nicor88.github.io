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

'use strict';

angular.module('blog').controller('menuController',
  ['$scope', '$rootScope', '$location', 'blogFactory',
    function ($scope, $rootScope, $location, blogFactory) {
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
      $scope.entryPoints = blogFactory.getMenuEntryPoints();

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
  routes.article1 = {
    state: 'article1',
    title: 'nicor88 - Article 1',
    url: '/{article:(?:article1)}',
    templateUrl: 'templates/articles/2017-02-08_article1.html',
    controller: 'indexController'
  };
  routes.article2 = {
    state: 'article2',
    title: 'nicor88 - Article 2',
    url: '/{article:(?:article2)}',
    templateUrl: 'templates/articles/2017-02-10_article2.html',
    controller: 'indexController'
  };
  return {
    $get: function() {
      return routes;
    }
  };
});

'use strict';

angular.module('blog').factory('blogFactory',
  [function() {
    var factory = {};
    factory.getMenuEntryPoints = function() {
      return [
        { name: 'About', link: '/about', isActive: false },
        { name: 'Home', link: '/', isActive: false }
      ];
    };
    factory.getArticles = function() {
      return [
        { date: '2017-02-10', name: 'Article 2', link: '/article2' },
        { date: '2017-02-08', name: 'Article 1', link: '/article1' }
      ];
    };
    return factory;
    }]);
