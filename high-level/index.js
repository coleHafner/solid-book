'use strict';

console.log('ready');
var riot = require('riot'),
    appView = require('./views/app.tag');

riot.mount(appView);
console.log('loaded');