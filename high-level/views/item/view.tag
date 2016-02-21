item
    div(onclick="{ actions.close }")
        i.fa.fa-close
    h2
        i.fa(class="{ model.faClass }")
        | { model.name }
    p { model.description }
    script.
        var self = this,
            Model = require('./model'),
            model = new Model(),
            actions = require('../../actions');

        self.model = model;
        self.actions = actions;

        model.update(self.update);
