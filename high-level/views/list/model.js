'use strict';

var _ = require('lodash'),
    appState = require('../../appState');

function Model() {
    this.itemsStream = appState.stream('items');;
}

Model.prototype.transform = transform;
Model.prototype.update = update;

module.exports = Model;

function transform() {
    return this.itemsStream
        .map(function (data) {
            var items = data[0];
            return _.map(items, function (item) {
                return {
                    name : item.name,
                    description : item.description,
                    faClass : getClass(item.type),
                    selected : item.selected
                }
            });
        });
}

function update(subscriber) {
    var self = this;
    this.transform()
        .each(function(items) {
            self.items = items;
            subscriber();
        })
}

function getClass(type) {
    switch (type) {
    case 'library':
        return 'fa-book';
    case 'concept':
        return 'fa-cogs';
    }
}
