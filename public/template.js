angular.module('blog').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/about.html',
    "<h3>About</h3>"
  );


  $templateCache.put('templates/main.html',
    "<!-- Main component for a primary marketing message or call to action -->\n" +
    "<div class=\"jumbotron\">\n" +
    "    <h1>nicor88 Blog</h1>\n" +
    "    <!-- <p>Description goes here.</p> -->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"articles\">\n" +
    "    <h3>Articles</h3>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-3\">\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n" +
    "            <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-default\" type=\"button\">\n" +
    "                    Search\n" +
    "                    <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\n" +
    "                </button>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/menu.html',
    "<!-- Fixed navbar -->\n" +
    "<nav class=\"navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <!--<div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "        </div>-->\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <!--<li class=\"active\"><a href=\"#\">Home</a></li>-->\n" +
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
