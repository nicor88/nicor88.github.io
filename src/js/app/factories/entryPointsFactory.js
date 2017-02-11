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
