# Common Shell Commands

## Check if command exists from script

```
hash mongo 2>/dev/null || { echo "no mongo" }
```

http://stackoverflow.com/a/677212/186636

## Curl

To display prettified JSON:

```
curl http://something.blah.yad | python -m json.tool
```

## Disk usage

```
# disk usage, human readable
du -h
# disk usage, summary per directory
du -sh

# free space
df -h
```

## Dpkg

List where apt-get installed something

```
dpkg -L nginx
```

## Links

Creating a symbolic link:

```
ln -s from to
```

## Means

To calculate the mean of a column of numbers in a file:

```shell
awk '{ total += $1; count++ } END { print total/count }' nocache.log
```

Awk is a program for dealing with files with columns. `$1` means the first column.
The command `total += $1; count++` runs for each row.

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

## Scp

Scp is for copying content over ssh.

You can use your ssh aliases when defining the to and from locations:

```
scp -r exampleStaging:/some/directory ~
```

## Ssh

Open an SSH tunnel to example.com port 22 and use your local port 27018 to
map to example.com's 27017.

Something like this is useful for interacting with a locally bound process (e.g.
  mongo, mysql, elasticsearch...).

```
ssh -L27018:localhost:27017 user@example.com -p 22
```

## Tar

There are two very common combination of flags in conjunction with the `tar` command:

```
# extract files with verbose output
tar -xvf some.file.tar.gz

# compress files with verbose output
tar -zcvf some.file.to.create.tar.gz directory-to-compress
```

If you want to delete the files as they get compressed, use the `--remove-files` flag.
This has to be the first flag used, or `tar` will think it's a file.

```
tar --remove-files a.tar.gz b
```

The `--remove-files` flag is not supported by the `tar` command that ships with
Mac, but gnu tar does:

```
brew instasll gnu-tar
```
