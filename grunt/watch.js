/* jshint node:true, es3:false */

module.exports = function (grunt, config) {

    'use strict';

    return {
        options: {
            atBegin: true
        },
        styles: {
            files: 'ui/sass/**/*.scss',
            tasks: ['sass', 'autoprefixer'],
            options: {
                interrupt: true
            }
        },
        javascript: {
            files: 'ui/js/**/*.js',
            tasks: 'webpack',
            options: {
                interrupt: true
            }
        }
    };

};
