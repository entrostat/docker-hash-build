import { injectable } from "tsyringe";
import { executeCommand } from "./execute-command";

@injectable()
export class DirectoryHashService {
  /**
   * Hash an array of directories
   * @param directories The directories to hash
   */
  async hash(directories: string[]): Promise<string[]> {
    return Promise.all(directories.map((d) => this.hashSingleDirectory(d)));
  }

  /**
   * Hash a single directory
   * @param directory The directory to hash
   */
  async hashSingleDirectory(directory: string): Promise<string> {
    const hash = await executeCommand(
      `find ${directory.replace(
        / /g,
        "\\ ",
      )} -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum`,
    );
    return hash.replace(/ +-/, "").replace(/\n/, "");
  }
}
