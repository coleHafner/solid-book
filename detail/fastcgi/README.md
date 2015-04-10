# FastCgi

You can prepend and postpend files using nginx when passing to fastcgi with
`fastcgi_param`. The same value can also be add to `php.ini`.

```
fastcgi_param PHP_VALUE "auto_prepend_file=/path/to/xhgui/external/header.php";
```

The functional difference between the two is that if you use nginx, you can
easily control which virtual hosts receive the files, while in `php.ini` all
vhosts will receive it.

After making changes to the nginx config files don't forget to restart:

```
sudo nginx -s reload
```

Avoid using `sudo service nginx restart`, since that will crash the server if
there are syntax errors in the changes. `sudo nginx -s reload` will not do a
restart if it finds errors.
