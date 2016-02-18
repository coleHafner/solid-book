list
    li(each="{ item in model.items }" onclick="{ actions.open }")
        h3
            i.fa(class="{ item.faClass }")
            | &nbsp; { item.name }
        p { item.description }
    .modal(if="{ model.selectedItem }")
        close
            i.fa.fa-close
        h2
            i.fa(class="{ model.selected.faClass }")
            | { model.selected.name }
        p { model.selected.description }
    script.
        var appState = require('../../appState'),
            itemsStream = appState.stream('items'),
            selectedStream = appState.stream('selectedItem'),
            self = this,
            model = require('./model'),
            actions = require('../../actions');

        self.model = model;
        self.actions = actions;

        self.mixin(model.transform(itemsStream, selectedStream));
