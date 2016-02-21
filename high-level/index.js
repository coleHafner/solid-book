'use strict';

var riot = require('riot'),
    router = require('./router'),
    appState = require('./appState'),
    appView = require('./views/app/view.tag');

require('./views/list/view.tag');
require('./views/item/view.tag');
require('./views/search/view.tag');

riot.mount(appView);
router.start();
