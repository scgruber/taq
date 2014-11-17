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
          transform: ['reactify'],
          extensions: ['.jsx']
        },
        src: ['src/js/main.jsx'],
        dest: 'dist/application.js'
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

  grunt.registerTask('build', ['copy', 'browserify'])
  grunt.registerTask('run', ['connect', 'build', 'watch'])
};