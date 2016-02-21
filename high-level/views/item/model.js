'use strict';

var _ = require('lodash'),
    appState = require('../../appState');

function Model() {
    this.selectedStream = appState.stream('items', 'selectedName');
}

Model.prototype.transform = transform;
Model.prototype.update = update;

module.exports = Model;

function transform() {
    return this.selectedStream
        .filter(function(data) {
            var name = data[1];
            return !!name;
        })
        .map(function (data) {
            var items = data[0],
                name = data[1];

            return _.find(items, function (item) {
                return item.name === name;
            });
        });
}

function update(subscriber) {
    var self = this;
    this.transform()
        .each(function(item) {
            _.extend(self, item);
            subscriber();
        })
}
