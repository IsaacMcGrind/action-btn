module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({
    jshint: {
      all: [
        'src/actionButton.js'
        ]
    },

    uglify: {
      main: {
      	options: {
	        report: 'min'
	      },
        files: {
          'dist/actionButton.min.js': ['src/actionButton.js']
        }
      }
    },
    watch: {
      scripts: {
        files: [
                'src/*.js'
        ],
        tasks: ['default'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['jshint', 'uglify']);

};