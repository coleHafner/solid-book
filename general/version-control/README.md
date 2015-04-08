
# Version Control

While there are multiple options for version control, no matter your choice, there
are a few things you must be able to accomplish:

1. Keep track of changes to the code base
2. Keep track of the latest stable and semi stable versions of the code base
3. Keep track of feature sets
4. Manage the release workflow by being able to isolate code ready for realease
5. Quickly create new releases from (grab bag) mixtures of feature sets
6. Use version control to find the commit that broke the app
7. Reuse code in multiple projects

This guide will cover how to achieve the above using git and gitflow.

## Keeping track of the changes in the code base

This just means committing code. It is important to commit code often and in small
chunks. This makes it easier to debug and isolate later.

For example if you have a large commit of 30 files that breaks something.

[source code](http://jsfiddle.net/pajtai/7fc60o8c/)

{% exercise %}
Define a variable `x` equal to 10.
{% initial %}
var x =
{% solution %}
var x = 10;
{% validation %}
assert(x == 10);
{% context %}
// This is context code available everywhere
// The user will be able to call magicFunc in his code
function magicFunc() {
    return 3;
}
{% endexercise %}
