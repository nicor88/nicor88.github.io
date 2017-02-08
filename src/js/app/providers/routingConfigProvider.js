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
