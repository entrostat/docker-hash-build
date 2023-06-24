import { injectable } from "tsyringe";
import { executeCommand } from "./execute-command";

@injectable()
export class FileHashService {
  /**
   * Hash an array of files
   * @param files The files to hash
   */
  async hash(files: string[]): Promise<string[]> {
    return Promise.all(files.map((f) => this.hashSingleFile(f)));
  }

  /**
   * Hash a single file
   * @param file The file to hash
   */
  async hashSingleFile(file: string): Promise<string> {
    const hash = await executeCommand(`sha256sum '${file}'`);
    return hash.replace(/ +.+/, "").replace(/\n/, "");
  }
}
