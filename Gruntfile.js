module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      index: {
        nonull: true,
        src: 'src/index.html',
        dest: 'dist/index.html'
      }
    },

    browserify: {
      react: {
        options: {
          debug: true,
          transform: [
            ['reactify', {'es6': true}]
          ],
          extensions: ['.jsx']
        },
        src: ['src/js/main.jsx'],
        dest: 'dist/application.js'
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      css: {
        src: ['src/css/main.scss'],
        dest: 'dist/style.css'
      }
    },

    watch: {
      index: {
        files: ['src/index.html'],
        tasks: ['copy:index']
      },
      jsx: {
        files: ['src/js/**/*.jsx'],
        tasks: ['browserify']
      },
      scss: {
        files: ['src/css/**/*.scss'],
        tasks: ['sass']
      }
    },

    connect: {
      server: {
        options: {
          port: 7997,
          base: 'dist'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('build', ['copy', 'browserify', 'sass'])
  grunt.registerTask('run', ['connect', 'build', 'watch'])
};