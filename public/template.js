angular.module('blog').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/index.html',
    "<div>\n" +
    "    <h2>{{welcomeMessage}}</h2>\n" +
    "</div>\n"
  );

}]);
