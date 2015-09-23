module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		typescript: {
			base: {
				src: ['ts/**/*.ts'],
				dest: 'app/js/app.js',
				options: {
					module: 'amd',
					target: 'es5'
				}
			}
		},

		sass: {
			options: {
				includePaths: ['bower_components/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: true
				},
				files: {
					'app/css/app.css': 'scss/app.scss'
				}
			}
		},

		watch: {
			grunt: {
				options: {
					reload: true
				},
				files: ['Gruntfile.js']
			},

			sass: {
				files: 'scss/**/*.scss',
				tasks: ['sass']
			},
			typescript: {
				files: 'ts/**/*.ts',
				tasks: ['typescript']
			},
			project: {
				files: 'app/**/*',
				tasks: [],
				options: {
					livereload: true
				}
			}
		},
		
		connect: {
			server: {
				options: {
					port: 8000,
					base: './'
				}
			}
		},
		
		open: {
			dev: {
				path: 'http://localhost:8000/app/index.html'
			}
		}
	});
	grunt.loadNpmTasks('grunt-typescript');

	grunt.loadNpmTasks('grunt-sass');

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('build', ['sass', 'typescript']);
	grunt.registerTask('default', ['connect', 'open' , 'build' ,'watch']);
};
