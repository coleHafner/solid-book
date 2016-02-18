item
    div
        i.fa.fa-close
    h2
        i.fa(class="{ model.faClass }")
        | { model.name }
    p { model.description }
    script.
        var appState = require('../../appState'),
            itemsStream = appState.stream('items'),
            selectedStream = appState.stream('selected');
            model = require('./model'),
            actions = require('../../actions');

        self.model = model;
        self.actions = actions;

        self.mixin(model.transform(selectedStream, itemsStream));
