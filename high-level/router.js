'use strict';

var riot = require('riot');

module.exports = {
    start : start
};

function start() {
    riot.route(function(name) {
        appState('selectedName', name);
    });

    riot.route.start(true);
}

