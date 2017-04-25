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
