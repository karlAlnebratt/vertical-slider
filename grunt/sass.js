'use strict';

module.exports = function () {
    return {
        dist: {
            files: [{
                expand: true,
                cwd: 'ui/sass',
                src: [
                    '**/*.scss'
                ],
                dest: 'www/css',
                ext: '.bundle.css'
            }],
            options: {
                'outputStyle': '',
                'sourceMap': false,
                'precision': 3
            }
        }
    };

};
