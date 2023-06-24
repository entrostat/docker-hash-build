hash-build
=================

This CLI can be used to reduce the number of times you "build" something unnecessarily. Even with cache in Docker, there is still a build time and this would reduce that time by checking if anything has changed before triggering the `docker build` command.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Getting Started](#getting-started)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hash-build
$ hash-build COMMAND
running command...
$ hash-build (--version)
hash-build/1.0.0 linux-x64 node-v20.3.0
$ hash-build --help [COMMAND]
USAGE
  $ hash-build COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hash-build build DIRECTORY`](#hash-build-build-directory)
* [`hash-build help [COMMANDS]`](#hash-build-help-commands)

## `hash-build build DIRECTORY`

Build a Docker image if the hash does not exist on the Docker registry.

```
USAGE
  $ hash-build build DIRECTORY -i <value> [-f <value>] [-r <value>] [-t <value>] [-p <value>] [-w <value>]
    [-W <value>] [-b <value>] [-u <value>] [-P <value>] [-l] [-P linux/amd64|linux/arm64|linux/arm/v7|linux/arm/v6]

ARGUMENTS
  DIRECTORY  The directory that represents the "context" for your docker build

FLAGS
  -P, --docker-password=<value>        The password for logging into the docker repository (mainly for if you are
                                       running this build process inside a container and have not logged docker in yet)
  -P, --platforms=<option>...          [default: linux/amd64] The platforms that should be built for, e.g.
                                       "linux/amd64,linux/arm64"
                                       <options: linux/amd64|linux/arm64|linux/arm/v7|linux/arm/v6>
  -W, --watch-file=<value>...          Files that should be watched to trigger the build. Note, if you set this then it
                                       IGNORES the build directory so you'd have to add that here as well.
  -b, --docker-build-flags=<value>...  Any additional build flags that you would like to plug directly into the Docker
                                       build command
  -f, --dockerfile-path=<value>        The path to the Dockerfile, if not specified, it's assumed that the file is in
                                       the context directory
  -i, --image-name=<value>             (required) The name of the image that should be built
  -l, --latest                         Whether to push the latest tag to the registry
  -p, --package=<value>                [default: ./package.json] The path to the package.json that holds the version of
                                       the build, the default is the package.json in the directory the CLI is run from.
  -r, --registry=<value>               The registry that should be used (by default Docker Hub is used)
  -t, --tag=<value>...                 The tag version that should be pushed to the registry so that it can be used in
                                       automated deployments. E.g. 'stable' or 'testing'
  -u, --docker-username=<value>        The username for logging into the docker repository (mainly for if you are
                                       running this build process inside a container and have not logged docker in yet)
  -w, --watch-directory=<value>...     Directories that should be watched to trigger the build. Note, if you set this
                                       then it IGNORES the build directory so you'd have to add that here as well.

DESCRIPTION
  Build a Docker image if the hash does not exist on the Docker registry.

EXAMPLES
  $ hash-build build
```

_See code: [dist/commands/build.ts](https://github.com/entrostat/hash-build/blob/v1.0.0/dist/commands/build.ts)_

## `hash-build help [COMMANDS]`

Display help for hash-build.

```
USAGE
  $ hash-build help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for hash-build.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_
<!-- commandsstop -->


# Getting Started

To develop on the project, clone it and run:

```shell
make init
```

If you have `zsh` you can use `autoenv` to automatically use the `node` environment set up for you. Otherwise, you'll have to run:

```shell
source .nodeenv/bin/activate
```
