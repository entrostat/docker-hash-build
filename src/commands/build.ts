import { Args, Command, Flags } from "@oclif/core";

export default class Build extends Command {
  static description =
    "Build a Docker image if the hash does not exist on the Docker registry.";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {};

  static args = {};

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Build);
  }
}
