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
    url: '/article1',
    templateUrl: 'templates/articles/2017-02-08_article1.html',
    controller: 'indexController'
  };
  routes.article2 = {
    state: 'article2',
    title: 'nicor88 - Article 2',
    url: '/article2',
    templateUrl: 'templates/articles/2017-02-10_article2.html',
    controller: 'indexController'
  };
  return {
    $get: function() {
      return routes;
    }
  };
});
