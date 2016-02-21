search
    input(type="text" placeholder=" Search")
    script.
        var self = this,
            Model = require('./model'),
            model = new Model(),
            actions = require('../../actions');

        self.model = model;
        self.actions = actions;

        model.update(self.update);
