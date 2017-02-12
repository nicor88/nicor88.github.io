angular.module('blog').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/about.html',
    "<h3>About</h3>"
  );


  $templateCache.put('templates/articles/2017-02-08_article1.html',
    "<h3>Article 1</h3>"
  );


  $templateCache.put('templates/articles/2017-02-10_article2.html',
    "<h3>Article 2</h3>"
  );


  $templateCache.put('templates/main.html',
    "<!-- Main component for a primary marketing message or call to action -->\n" +
    "<div class=\"jumbotron\">\n" +
    "    <h1>nicor88 Blog</h1>\n" +
    "    <!-- <p>Description goes here.</p> -->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"articles\">\n" +
    "    <div class=\"row\">\n" +
    "        <h2>Articles</h2>\n" +
    "        <div class=\"col-lg-3 input-group\">\n" +
    "            <span class=\"input-group-addon\" href=\"#\"><span class=\"glyphicon glyphicon-search\"></span></span>\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" ng-model=\"search.name\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\" style=\"margin-top: 20px;\">\n" +
    "        <div ng-repeat=\"article in articles | filter:search:strict\">\n" +
    "            <span class=\"article-date\">\n" +
    "                {{article.date}}\n" +
    "            </span>\n" +
    "            <span class=\"article-name\">\n" +
    "                <a href=\"\" ng-click=\"go(article.link)\">{{article.name}}</a>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/menu.html',
    "<!-- Fixed navbar -->\n" +
    "<nav class=\"navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li>\n" +
    "                    <a href=\"https://github.com/nicor88\">\n" +
    "                        <img src=\"img/github-32px.png\">\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"https://www.linkedin.com/in/nicolacorda\">\n" +
    "                        <img src=\"img/linkedin-32px.png\">\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"https://twitter.com/nicorc88\">\n" +
    "                        <img src=\"img/twitter-32px.png\">\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right menu-items\" ng-repeat=\"ep in entryPoints\">\n" +
    "                <li ng-class=\"{active: isActive(ep)}\" ng-attr-id=\"{{'object-' + $index}}\">\n" +
    "                    <a href=\"\" ng-click=\"go(ep)\">{{ep.name}}</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

}]);
