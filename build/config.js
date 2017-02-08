'use strict';

var config = {
  // http://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables
  isDeploy: process.env.CI === 'true',
  targetJsFile: 'application.js',
  targetJsLibsFile: 'libs.js',
  targetCssFile: 'application.css',
  publicDir: './public/',
  localDevDir: './local-dev/',
  copy: {
    srcImg: 'src/img',
    srcFonts: 'src/fonts',
    publicImg: 'public/img',
    publicFonts: 'public/fonts',
    localDevImg: 'local-dev/img',
    localDevFonts: 'local-dev/fonts'
  },
  src: {
    js: [
      'src/js/*.js',
      'src/js/app/*.js',
      'src/js/app/controllers/**/*.js',
      'src/js/app/providers/**/*.js',
      'src/js/app/directives/**/*.js'
    ],
    jsExternal: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    css: ['src/css/**/*.css']
  }
};

module.exports = config;
