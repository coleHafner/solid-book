# Creating cli commands


## Example

```
#!/usr/bin/env bash
#set -x # for debugging

    while test $# -gt 0; do
        case "$1" in
            -h|--help)
                echo "Ansible provisioning"
                echo " "
                echo "Provisions servers via Ansible. Must be run from project root"
                echo " "
                echo "options:"
                echo "-h, --help        show help"
                echo "-s|--staging      provision staging servers"
                echo "-p|--production   provision production servers"
                exit 0
                ;;
            -s|--staging)
                shift
                ENVIRONMENT="staging"
                ;;
            -p|--production)
                shift
                ENVIRONMENT="production"
                ;;
            *)
                break
                ;;
        esac
    done

ansible-playbook ansible/site.yml -l $ENVIRONMENT -i ansible/hosts --ask-sudo-pass

```

`#!/usr/bin/env bash` is more flexible. This means no flags and have to use, `set -x` for flags.

Use `while` and `shift` to grab the flags from the comand. Use `-h` to echo help and stop.

Can alias it once done, e.g. alias `provision=./home/user/provision` or `ln -s` it to somewhere `$PATH` looks... example: `ln -s /home/user/provision /usr/bin/local/provision`.
