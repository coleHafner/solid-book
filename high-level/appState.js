'use strict';

var appState = require('app-state/stream').init(),
    concepts = require('./type/concept/items.json'),
    libraries = require('./type/library/items.json'),
    itemsModel = require('./models/items');

appState.transform('items', itemsModel.setItems, concepts, libraries);

module.exports = appState;
