'use strict';

var _ = require('lodash');

module.exports = {
    setItems : setItems
};

function setItems(items, concepts, libraries) {
    return _.sortBy(concepts.concat(libraries), 'name');
}