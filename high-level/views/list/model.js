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

            itemsStream
                .map(function (items) {
                    return _.map(items, function (item) {
                        return item.name;
                    });
                })
                .each(function(items) {
                    self.model.items = items;
                    self.update();
                })
        }
    };
}
