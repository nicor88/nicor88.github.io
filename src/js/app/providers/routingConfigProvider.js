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
