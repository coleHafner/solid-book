'use strict';

console.log('ready');
var riot = require('riot'),
    appState = require('./appState'),
    appView = require('./views/app/view.tag');

require('./views/list/view.tag');
require('./views/item/view.tag');

riot.mount(appView);

riot.route(function(name) {
    appState('selectedName', name);
});

riot.route.start(true);
