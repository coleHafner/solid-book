# Roles

Roles are pod organized. The directory structure of each is essentially the same.
The following directories are often found in a role:

```
- files
- meta
- tasks
- templates
```

Additionally `vars` and `defaults` may be found. Variables can be put into each
role or at the top of the directory structure. I find having all role related variables
in one place easier to manage than splitting them up.

host and group vars: http://docs.ansible.com/intro_inventory.html#splitting-out-host-and-group-specific-data
