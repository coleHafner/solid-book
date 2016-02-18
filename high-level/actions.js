'use strict';

var appState = require('./appState');

module.exports = {
    open : open
};

function open() {
    var selected = this.item;

    appState('selectedItem', selected.name);
}