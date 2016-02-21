'use strict';

var appState = require('./appState'),
    riot = require('riot');

module.exports = {
    close : close,
    open : open
};

function close() {
    riot.route('');
}

function open() {
    var selected = this.item;
    riot.route(selected.name);
}