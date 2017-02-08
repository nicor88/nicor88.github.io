var config;
config = require('./build/config');

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      public: 'public/',
      localDev: 'local-dev/'
    },
    copy: {
      imgPublic: { cwd: config.copy.srcImg, src: '**/*', dest: config.copy.publicImg, expand: true },
      imgLocalDev: { cwd: config.copy.srcImg, src: '**/*', dest: config.copy.localDevImg, expand: true },
      indexLocalDev: { src: 'index-local-dev.html', dest: config.localDevDir + 'index.html' },
      indexPublic: { src: 'index.html', dest: config.publicDir }
    },
    concat: {
      jsLibsLocalDev : {
        src: config.src.jsExternal,
        dest: config.localDevDir + config.targetJsLibsFile
      },
      jsAppLocalDev : {
        src: config.src.js,
        dest: config.localDevDir + config.targetJsFile
      },
      cssLocalDev: {
        src: [config.src.css, config.src.cssExternal, 'sass-local-dev/application-scss.css'],
        dest: config.localDevDir + config.targetCssFile
      },
      jsLibsPublic : {
        src: config.src.jsExternal,
        dest: config.publicDir + config.targetJsLibsFile
      },
      jsAppPublic : {
        src: config.src.js,
        dest: config.publicDir + config.targetJsFile
      },
      cssPublic: {
        src: [config.src.css, config.src.cssExternal, 'sass-public/application-scss.css'],
        dest: config.publicDir + config.targetCssFile
      }
    },
    ngtemplates: {
      localDev: {
        src: 'src/templates/**/*.html',
        dest: config.localDevDir + 'template.js',
        options: {
          module: 'blog',
          url: function(file) {
            return file.replace('src/', '');
          }
        }
      },
      public: {
        src: 'src/templates/**/*.html',
        dest: config.publicDir + 'template.js',
        options: {
          module: 'blog',
          url: function(file) {
            return file.replace('src/', '');
          }
        }
      }
    },
    watch: {
      scripts: {
        files: ['local-dev/index.html', 'local-development/application.js',
          'local-development/libs.js', 'local-development/template.js', 'local-development/application.css']
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'local-dev/',
          interrupt: true,
          spawn: false
        }
      }
    }
  });

  // load NpmTask
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // register Tasks

  // build for public
  grunt.registerTask('build-public', ['clean:public', 'copy:imgPublic', 'copy:indexPublic',
    'concat:jsLibsPublic', 'concat:jsAppPublic', 'concat:cssPublic', 'ngtemplates:public']);

  // build for local-dev
  grunt.registerTask('build-local-dev', ['clean:localDev', 'copy:imgLocalDev', 'copy:indexLocalDev',
    'concat:jsLibsLocalDev', 'concat:jsAppLocalDev', 'concat:cssLocalDev', 'ngtemplates:localDev']);
  // serve local-dev folder
  grunt.registerTask('serve', ['connect:server', 'watch']);
};
