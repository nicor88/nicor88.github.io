'use strict';

var config = {
  targetJsFile: 'application.js',
  targetJsLibsFile: 'libs.js',
  targetCssFile: 'application.css',
  publicDir: './public/',
  localDevDir: './local-dev/',
  copy: {
    srcImg: 'img',
    localDevImg: 'local-dev/img'
  },
  src: {
    js: [
      'src/js/*.js',
      'src/js/app/*.js',
      'src/js/app/controllers/**/*.js',
      'src/js/app/providers/**/*.js',
      'src/js/app/factories/**/*.js',
      'src/js/app/directives/**/*.js'
    ],
    jsExternal: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    css: ['src/css/**/*.css'],
    cssExternal: []
  }
};

module.exports = config;
