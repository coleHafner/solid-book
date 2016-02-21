list
    li(each="{ item in model.items }" onclick="{ actions.open }")
        h3
            i.fa(class="{ item.faClass }")
            | &nbsp; { item.name }
        p { item.description }
    script.
        var self = this,
            Model = require('./model'),
            model = new Model(),
            actions = require('../../actions');

        self.model = model;
        self.actions = actions;

        model.update(self.update);
