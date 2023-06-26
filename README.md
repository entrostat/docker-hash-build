docker-hash-build
=================

This CLI can be used to reduce the number of times you "build" something unnecessarily. Even with cache in Docker, there is still a build time and this would reduce that time by checking if anything has changed before triggering the `docker build` command.

The `docker-hash-build` CLI stores a calculated hash on your Docker registry to ensure that you don't rebuild images that are already there. You're hash your whole repo, a few directories, and a few files to control when a rebuild is needed.

I use [regclient](https://github.com/regclient/regclient) to copy tags to quickly "retag" things that were built so you don't need to pull images down and push them back under the new tag. Thanks to the contributors or [regclient](https://github.com/regclient/regclient) for this incredible tool!

Part of the reason I built this was to ensure that I could reduce the build time, while catering for `amd64` and `arm64` builds. So you'll see that you can select the platform(s) you would like to build your images for, and `docker buildx` is used to create the images. A previous tool I created [https://github.com/entrostat/entro-ci](https://github.com/entrostat/entro-ci) is able to perform a similar function but is written using basic `docker` functionality and does not cater for `arm64` builds.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Requirements](#requirements)
* [Usage](#usage)
* [Commands](#commands)
* [Detailed Explanation](#detailed-explanation)
* [Getting Started (Contributing)](#getting-started-contributing)
<!-- tocstop -->

# Requirements
In order to use this CLI, you must have:
 - `docker` installed and accessible via the command line (and your user)
 - `docker buildx` support
 - (optional) [regclient](https://github.com/regclient/regclient) installed and accessible via the command line (and your user). If this is not installed, the `docker-hash-build` cli will `curl` for the binary file and install it for you. This will only work on an `amd64` machine. If you have a different machine, installed `regcli` beforehand!

# Usage

<!-- usage -->
```sh-session
$ npm install -g docker-hash-build
$ docker-hash-build COMMAND
running command...
$ docker-hash-build (--version)
docker-hash-build/3.2.0 linux-x64 node-v20.3.0
$ docker-hash-build --help [COMMAND]
USAGE
  $ docker-hash-build COMMAND
...
```
<!-- usagestop -->

I recommend using `npx` for convenience:
```sh-session
$ npx docker-hash-build build --help
```




# Commands
<!-- commands -->
* [`docker-hash-build build DIRECTORY`](#docker-hash-build-build-directory)
* [`docker-hash-build help [COMMANDS]`](#docker-hash-build-help-commands)

## `docker-hash-build build DIRECTORY`

Build a Docker image if the hash does not exist on the Docker registry.

```
USAGE
  $ docker-hash-build build DIRECTORY -i <value> [-f <value>] [-r <value>] [-t <value>] [-p <value>] [-w
    <value>] [-W <value>] [-b <value>] [-u <value>] [-P <value>] [-l] [-P
    linux/amd64|linux/arm64|linux/arm/v7|linux/arm/v6] [-x <value>]

ARGUMENTS
  DIRECTORY  The directory that represents the "context" for your docker build

FLAGS
  -P, --docker-password=<value>                The password for logging into the docker repository (mainly for if you
                                               are running this build process inside a container and have not logged
                                               docker in yet)
  -P, --platforms=<option>...                  [default: linux/amd64] The platforms that should be built for, e.g.
                                               "linux/amd64,linux/arm64"
                                               <options: linux/amd64|linux/arm64|linux/arm/v7|linux/arm/v6>
  -W, --watch-file=<value>...                  Files that should be watched to trigger the build. Note, if you set this
                                               then it IGNORES the build directory so you'd have to add that here as
                                               well.
  -b, --docker-build-flags=<value>...          Any additional build flags that you would like to plug directly into the
                                               Docker build command
  -f, --dockerfile-path=<value>                The path to the Dockerfile, if not specified, it's assumed that the file
                                               is in the context directory
  -i, --image-name=<value>                     (required) The name of the image that should be built
  -l, --latest                                 Whether to push the latest tag to the registry
  -p, --package=<value>                        [default: ./package.json] The path to the package.json that holds the
                                               version of the build, the default is the package.json in the directory
                                               the CLI is run from.
  -r, --registry=<value>                       The registry that should be used (by default Docker Hub is used)
  -t, --tag=<value>...                         The tag version that should be pushed to the registry so that it can be
                                               used in automated deployments. E.g. 'stable' or 'testing'
  -u, --docker-username=<value>                The username for logging into the docker repository (mainly for if you
                                               are running this build process inside a container and have not logged
                                               docker in yet)
  -w, --watch-directory=<value>...             Directories that should be watched to trigger the build. Note, if you set
                                               this then it IGNORES the build directory so you'd have to add that here
                                               as well.
  -x, --buildx-additional-build-flags=<value>  ADVANCED: Any additional build flags that you would like to plug directly
                                               into the Docker buildx build command

DESCRIPTION
  Build a Docker image if the hash does not exist on the Docker registry.

EXAMPLES
  $ docker-hash-build build . --image-name=kerren/docker-hash-build --platforms=linux/amd64 --platforms=linux/arm64

  $ docker-hash-build build ./path/to/repo --image-name=kerren/docker-hash-build

  $ docker-hash-build build . --image-name=kerren/docker-hash-build --dockerfile-path=./Dockerfile.stable

  $ docker-hash-build build . --image-name=kerren/docker-hash-build --tag=staging

  $ docker-hash-build build . --image-name=kerren/docker-hash-build --tag=stable --latest

  $ docker-hash-build build . --image-name=kerren/docker-hash-build --watch-file=./yarn.lock

  $ docker-hash-build build . --image-name=kerren/docker-hash-build --watch-directory=./src

  $ docker-hash-build build . --image-name=kerren/docker-hash-build --watch-directory=./src --watch-file=./yarn.lock

  $ docker-hash-build build . --image-name=kerren/docker-hash-build --docker-username=username --docker-password=password --registry=registry.example.com

  $ docker-hash-build build . --image-name=kerren/docker-hash-build --buildx-additional-build-flags="--cache-to type=gha,mode=max,scope=$GITHUB_REF_NAME-image-name --cache-from type=gha,scope=$GITHUB_REF_NAME-image-name"
```

_See code: [dist/commands/build.ts](https://github.com/entrostat/docker-hash-build/blob/v3.2.0/dist/commands/build.ts)_

## `docker-hash-build help [COMMANDS]`

Display help for docker-hash-build.

```
USAGE
  $ docker-hash-build help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for docker-hash-build.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_
<!-- commandsstop -->

# Detailed Explanation
I've tried to make this `cli` as functional as possible. But that does mean it may come across as a bit complicated. So I thought I'd explain a few of the concepts in detail here so avoid confusion.

## Hashing
Hashing is run across the files and directories you specify. This is done using the `sha256` algorithm. It recursively runs over files and combines the hashes for each one and finally hashes the combination of hashes from all directories, files, etc.

By default, the directory that you're triggering the build from is hashed. If you specify a file/folder or a combination to watch, it will no longer hash the build directory and will only look at the values you specified. This is useful if you have base `docker` images that you only want to rebuild when a `.lock` file (for example) changes.

The hash that gets generated is stored on the Docker registry as an image tag. This means that if you run the build again, it will check the hash against the registry and if it's the same, it will not rebuild the image. This is useful for CI/CD pipelines where you don't want to rebuild the image if nothing has changed.

## Tagging

Tags are used to modify the tag attached to an image. If you use the `--latest` flag, it will tag your image with the `latest` tag. So, for instance, this image would be tagged as `kerren/docker-hash-build:latest` whenever it was built if I used that flag.

If you leave the `--tag` flag unset, it will tag the image with the latest version in your `package.json` which is assumed to be in the directory you're running the `cli` from (you can change this with the `--package` flag). So, for instance, if I've just run a release and the version in the `package.json` is `1.3.3`, it will tag the image as `kerren/docker-hash-build:v1.3.3`.

The more exciting part is when you specify a tag(s). For instance, let's say you added two `--tag` flags, `staging` and `beta`. If the version in the `package.json` is `1.3.3`, it will create the following image tags on the registry, `kerren/docker-hash-build:staging-v1.3.3` and `kerren/docker-hash-build:beta-v1.3.3`. This is great for testing and setting up different environments. It means that you can use the same registry (ie. share the build hashes) and different tags per environment.

## Docker Credentials

I recommend logging into your registry beforehand since this `cli` just calls the `docker` cli through terminal. However, if you would like to include the login credentials in the `cli` call (for example in CI/CD pipelines), you can specify the registry, username, and password.

## Platforms

By default, images are built for `amd64`, but you are able to specify the platform that you would like to build for. Currently, I've added the following options: `linux/amd64`, `linux/arm64`, `linux/arm/v7`, `linux/arm/v6`. If you need any others, please open an issue or PR the change into the repo.

## Custom `buildx` flags

I've added the ability for you to plug in `buildx` build flags directly using the `--buildx-additional-build-flags` flag. This allows you to set up things like caching. For instance, for Github, here's a great article on [caching Github Actions builds using buildx](https://docs.docker.com/build/cache/backends/gha/).

An example of how this may look would be:
```
--buildx-additional-build-flags="--cache-to type=gha,mode=max,scope=${GITHUB_REF_NAME}-docker-hash-build --cache-from type=gha,scope=${GITHUB_REF_NAME}-docker-hash-build"               
```

This is quite complicated but it does allow you to tweak the build command a bit and potentially optimise your build process further!

# Getting Started (Contributing)

To develop on the project, clone it and run:

```shell
make init
```

If you have `zsh` you can use `autoenv` to automatically use the `node` environment set up for you. Otherwise, you'll have to run:

```shell
source .nodeenv/bin/activate
```
