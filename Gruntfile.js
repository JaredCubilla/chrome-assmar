module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				jshintrc: '.jshintrc'
			},

			dist: ['Gruntfile.js', 'assets/scripts/**/*.js']
		},

		uglify: {
			dist: {
				files: {
					'build/scripts/main.min.js': ['assets/scripts/main.js']
				}
			}
		},

		watch: {
			scripts: {
				options: {
					livereload: true
				},

				files: ['assets/scripts/**/*.js'],
				tasks: ['newer:jshint', 'newer:uglify'],
			},
		},

		connect: {
			test: {
				options: {
					port: 9001,
					open: true,
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['newer:jshint', 'newer:uglify']);
};