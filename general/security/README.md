# Security

This is a very incomplete and partial look at security.

## Binding to localhost

Binding to localhost increases security and removes the ability for easy access
to many services that use ports to run (mysql, mongo, elasticsearch).

This means that the
ports the services use will not be available directly from other hosts. This allows
better control of access. For example if you bind mongo to localhost, applications
running on your server can still access it. You can also get access via SSH
tunnels or proxies. For example using nginx and htpasswd you can password protect
something like elasticsearch. Nginx can listen on port 80, and only allow access
in certain cases by doing a proxy_pass to localhost port 9200.
