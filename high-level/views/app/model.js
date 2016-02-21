'use strict';

var _ = require('lodash'),
    appState = require('../../appState');

function Model() {
    this.selectedStream = appState.stream('selectedName');;
}

Model.prototype.transform = transform;
Model.prototype.update = update;

module.exports = Model;

function transform() {
    return this.selectedStream;
}

function update(subscriber) {
    var self = this;
    this.transform()
        .each(function(data) {
            self.selectedName = data[0];
            subscriber();
        });
}
