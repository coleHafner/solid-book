app
    header
        h1 At a high level... as they say
    content
        ul.list(riot-tag="list")
        item.item(if="{ model.selectedName }")
    script.
        var self = this,
            Model = require('./model'),
            model = new Model(),
            actions = require('../../actions');

        self.model = model;
        self.actions = actions;

        model.update(self.update);
