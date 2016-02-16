'use strict';

var appState = require('./appState');

module.exports = {
    open : open
};

function open() {
    var selected = this.item,
        items = appState('items');

    appState('items', items.map(function(item) {
        if (selected.name === item.name) {
            item.selected = {
                value : true
            }
        } else {
            return item;
        }
    }));
}