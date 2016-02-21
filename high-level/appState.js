'use strict';

var appState = require('app-state/stream').init(),
    libraries = require('./type/library/items.json');

module.exports = appState;
appState.set('items', libraries);
