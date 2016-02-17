'use strict';

var appState = require('./appState');

module.exports = {
    open : open
};

function open() {
    var selected = this.item,
        items = appState('items');

    appState('items', items.map(function(item) {
        item.selected = selected.name === item.name;
        return item;
    }));
}