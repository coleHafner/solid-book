list
    li(each="{ item in model.items }")
        h3 { item }
    script.
        var appState = require('../../appState'),
            itemsStream = appState.stream('items'),
            self = this,
            model = require('./model');

        self.model = model;
        self.mixin(model.transform(appState.stream('items')));
