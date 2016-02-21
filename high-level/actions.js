'use strict';

var appState = require('./appState');

module.exports = {
    close : close,
    open : open
};

function close() {
    appState('selectedName', null);
}

function open() {
    var selected = this.item;

    appState('selectedName', selected.name);
}