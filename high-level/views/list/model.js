'use strict';

var _ = require('lodash');

module.exports = {
    transform : transform,
    items : []
};

function transform(itemsStream) {
    return {
        init : function() {
            var self = this;

            itemsStream = itemsStream
                .map(function (items) {
                    debugger;
                    return _.map(items, function (item) {
                        return {
                            name : item.name,
                            description : item.description,
                            faClass : getClass(item.type)
                        }
                    });
                });

            itemsStream.fork().each(function(items) {
                    self.model.items = items;
                    self.update();
                });

            itemsStream.fork()
                .map(function(items) {
                    return _.find(items, function(item) {
                        return !! item.selected;
                    });
                })
                .each(function(item) {
                    self.model.selected = item;
                });

        }
    };
}

function getClass(type) {
    switch (type) {
        case 'library':
            return 'fa-book'
    }
}
