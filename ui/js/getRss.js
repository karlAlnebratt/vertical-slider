"use strict";

import {parseString} from 'xml2js';

export default function getRss (url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var options = {
                trim: true,
                explicitArray: false
            };
            var xml = request.responseText;
            parseString(xml, options, function (err, result) {

                var rss = null;
                if (!err) {
                    rss = result.rss.channel;
                }
                callback(err, rss);
            });


        } else {
            // We reached our target server, but it returned an error
            callback(new Error("Server error"));
          }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      callback(new Error("Connection error "));
    };

    request.send();
}
