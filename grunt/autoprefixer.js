'use strict';

module.exports = function () {
    return {
        options: {
            map: false,
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            remove: false
        },
        dist: {
            src: 'www/css/master.bundle.css'
        }
    };
};
