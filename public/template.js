angular.module('blog').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/about.html',
    "<h3>About</h3>"
  );


  $templateCache.put('templates/index.html',
    "<!-- title of the blog -->\n" +
    "<h3>Blog title</h3>\n" +
    "<!-- search field-->\n" +
    "<span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\n" +
    "<!-- articles list-->\n" +
    "<div>Articles  list</div>\n"
  );


  $templateCache.put('templates/menu.html',
    "<!-- social links on the left-->\n" +
    "<!-- home about on the right-->\n" +
    "\n" +
    "<a href=\"/#\">Home</a>\n" +
    "\n" +
    "<a href=\"/#about\">About</a>\n"
  );

}]);
