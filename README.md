hash-build
=================

This CLI can be used to reduce the number of times you "build" something unnecessarily. Even with cache in Docker, there is still a build time and this would reduce that time by checking if anything has changed before triggering the `docker build` command.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hash-build
$ hash-build COMMAND
running command...
$ hash-build (--version)
hash-build/0.0.0 linux-x64 node-v16.19.0
$ hash-build --help [COMMAND]
USAGE
  $ hash-build COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hash-build hello PERSON`](#hash-build-hello-person)
* [`hash-build hello world`](#hash-build-hello-world)
* [`hash-build help [COMMANDS]`](#hash-build-help-commands)
* [`hash-build plugins`](#hash-build-plugins)
* [`hash-build plugins:install PLUGIN...`](#hash-build-pluginsinstall-plugin)
* [`hash-build plugins:inspect PLUGIN...`](#hash-build-pluginsinspect-plugin)
* [`hash-build plugins:install PLUGIN...`](#hash-build-pluginsinstall-plugin-1)
* [`hash-build plugins:link PLUGIN`](#hash-build-pluginslink-plugin)
* [`hash-build plugins:uninstall PLUGIN...`](#hash-build-pluginsuninstall-plugin)
* [`hash-build plugins:uninstall PLUGIN...`](#hash-build-pluginsuninstall-plugin-1)
* [`hash-build plugins:uninstall PLUGIN...`](#hash-build-pluginsuninstall-plugin-2)
* [`hash-build plugins update`](#hash-build-plugins-update)

## `hash-build hello PERSON`

Say hello

```
USAGE
  $ hash-build hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/entrostat/hash-build/blob/v0.0.0/dist/commands/hello/index.ts)_

## `hash-build hello world`

Say hello world

```
USAGE
  $ hash-build hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ hash-build hello world
  hello world! (./src/commands/hello/world.ts)
```

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

## `hash-build plugins`

List installed plugins.

```
USAGE
  $ hash-build plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ hash-build plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `hash-build plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ hash-build plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ hash-build plugins add

EXAMPLES
  $ hash-build plugins:install myplugin 

  $ hash-build plugins:install https://github.com/someuser/someplugin

  $ hash-build plugins:install someuser/someplugin
```

## `hash-build plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ hash-build plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ hash-build plugins:inspect myplugin
```

## `hash-build plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ hash-build plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ hash-build plugins add

EXAMPLES
  $ hash-build plugins:install myplugin 

  $ hash-build plugins:install https://github.com/someuser/someplugin

  $ hash-build plugins:install someuser/someplugin
```

## `hash-build plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ hash-build plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ hash-build plugins:link myplugin
```

## `hash-build plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hash-build plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hash-build plugins unlink
  $ hash-build plugins remove
```

## `hash-build plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hash-build plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hash-build plugins unlink
  $ hash-build plugins remove
```

## `hash-build plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hash-build plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hash-build plugins unlink
  $ hash-build plugins remove
```

## `hash-build plugins update`

Update installed plugins.

```
USAGE
  $ hash-build plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
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
