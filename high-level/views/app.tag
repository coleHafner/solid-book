app
    header
        h1 At a high level... as they say
    content
        ul(riot-tag="list")
            li(riot-tag="list-item" each="{ model in model.list }")
