'use strict';

var appState = require('immutable-app-state').init(),
    libraries = require('./type/library/items.json');

module.exports = appState;
appState.set('items', libraries);
