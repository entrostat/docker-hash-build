import { Args, Command, Flags } from "@oclif/core";

export default class Build extends Command {
  static description =
    "Build a Docker image if the hash does not exist on the Docker registry.";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    "dockerfile-path": Flags.file({
      char: "f",
      description:
        "The path to the Dockerfile, if not specified, it's assumed that the file is in the context directory",
      required: false,
      exists: true,
    }),
    registry: Flags.string({
      char: "r",
      description:
        "The registry that should be used (by default Docker Hub is used)",
    }),
    tag: Flags.string({
      char: "t",
      description:
        "The tag version that should be pushed to the registry so that it can be used in automated deployments. E.g. 'stable' or 'testing'",
    }),
    package: Flags.string({
      char: "p",
      description:
        "The path to the package.json that holds the version of the build, the default is the package.json in the directory the CLI is run from.",
      default: "./package.json",
    }),
    "watch-directory": Flags.directory({
      char: "w",
      description: `Directories that should be watched to trigger the build. Note, if you set this then it IGNORES the build directory so you'd have to add that here as well.`,
      required: false,
      multiple: true,
    }),
    "watch-file": Flags.directory({
      char: "W",
      description: `Files that should be watched to trigger the build. Note, if you set this then it IGNORES the build directory so you'd have to add that here as well.`,
      required: false,
      multiple: true,
    }),
    "docker-build-flags": Flags.string({
      char: "b",
      required: false,
      multiple: true,
      description:
        "Any additional build flags that you would like to plug directly into the Docker build command",
    }),
    "docker-username": Flags.string({
      char: "u",
      required: false,
      multiple: false,
      description:
        "The username for logging into the docker repository (mainly for if you are running this build process inside a container and have not logged docker in yet)",
    }),
    "docker-password": Flags.string({
      char: "P",
      required: false,
      multiple: false,
      description:
        "The password for logging into the docker repository (mainly for if you are running this build process inside a container and have not logged docker in yet)",
    }),
    latest: Flags.boolean({
      char: "l",
      required: false,
      default: false,
      description: "Whether to push the latest tag to the registry",
    }),
  };

  static args = {
    directory: Args.directory({
      description: `The directory that represents the "context" for your docker build`,
      required: true,
      exists: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Build);
  }
}
