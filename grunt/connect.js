'use strict';

module.exports = function () {
    return {
        server: {
            options: {
                port: 5000,
                hostname: 'localhost',
                open: true,
                keepalive: true,
                middleware: function(connect, options) {
                  return [
                    function(req, res, next) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                      return next();
                    }

                  ];
                }
            }
        }
    };
};
