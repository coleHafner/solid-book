'use strict';

var _ = require('lodash');

module.exports = {
    transform : transform,
    items : []
};

function transform(itemsStream, selectedStream) {
    return {
        init : function() {
            var self = this;

            itemsStream = itemsStream
                .map(function (items) {
                    return _.map(items, function (item) {
                        return {
                            name : item.name,
                            description : item.description,
                            faClass : getClass(item.type),
                            selected : item.selected
                        }
                    });
                })
                .each(function(items) {
                    self.model.items = items;
                    self.update();
                });

            selectedStream
                .each(function(selectedItem) {
                    self.model.selectedItem = selectedItem;
                    self.update();
                })
        }
    };
}

function getClass(type) {
    switch (type) {
        case 'library':
            return 'fa-book'
    }
}
