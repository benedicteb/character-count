'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    app: {
      target: 'bin',
      jsroot: 'src'
    },
    eslint: {
      target: [
        '<%= app.jsroot %>/**/*.js'
      ]
    },
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {'presets': ['es2015', 'react']}]
          ]
        },
        files: {
          'bin/index.js': 'src/**/*.js'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= app.target %>/index.js': '<%= app.target %>/index.js'
        }
      }
    },
    watch: {
      scripts: {
        files: [
          '<%= app.jsroot %>/**/*.js'
        ],
        tasks: ['eslint', 'browserify']
      }
    }
  });

  grunt.registerTask('default', ['browserify', 'uglify']);
};
