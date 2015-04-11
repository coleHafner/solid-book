# Common Shell Commands

## Links

Creating a symbolic link:

```
ln -s from to
```

## Means

To calculate the mean of a column of numbers in a file:



## Open

* Open a url with the default browser:

```shell
open http://localhost:4000
```

This command is often useful after running a watch task or something similar. A
background process can be used to solve the problem of using a task that doesn't
exit until you are done with it:

```
(sleep 3; open http://localhost:4000)&; someSortOfWatchTask
```

The `&` symbol can be used to launch a background task.

## Ports

To get the pid of a process running on a port, use `lsof` (list open files):

This will get the pid the process(es) running on port 4000.

```
lsof -t -i:4000
```

To kill them:

```
kill $(lsof -t -i:4000)
```

## Ssh

Open an SSH tunnel to example.com port 22 and use your local port 27018 to
map to example.com's 27017.

Something like this is useful for interacting with a locally bound process (e.g.
  mongo, mysql, elasticsearch...).

```
ssh -L27018:localhost:27017 user@example.com -p 22
```
