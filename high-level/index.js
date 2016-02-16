'use strict';

console.log('ready');
var riot = require('riot'),
    appView = require('./views/app/view.tag');

require('./views/list/view.tag');

riot.mount(appView);
console.log('loaded');