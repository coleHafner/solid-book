'use strict';
module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        buildGhPages : {
            book : {
              options : {
                dist : '_book'
              }
            }
        }
    });
}
