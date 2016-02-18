'use strict';

var _ = require('lodash'),
    model = {
        transform : transform,
        selected : {}
    };

module.exports = model;

function transform(selectedStream, itemsStream) {
    return {
        init : function () {

            var self = this;
            selectedStream
                .each(function (selectedName) {
                    var items = itemsStream.last();

                    model.selected = _.find(items, function (item) {
                        return item.name === selectedName;
                    });
                    self.update();
                });
        }
    };
}
