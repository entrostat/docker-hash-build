import { injectable } from "tsyringe";
import { DirectoryHashService } from "./directory-hash.service";
import { FileHashService } from "./file-hash.service";
import { executeCommand } from "./execute-command";

@injectable()
export class HashService {
  constructor(
    private directoryHashService: DirectoryHashService,
    private fileHashService: FileHashService,
  ) {}

  /**
   * Hash all of the directories and files
   * @param directories The directories to hash
   * @param files The files to hash
   */
  async hash(directories: string[], files: string[]): Promise<string> {
    const [directoryHashes, fileHashes] = await Promise.all([
      this.directoryHashService.hash(directories),
      this.fileHashService.hash(files),
    ]);
    const hashes = [...directoryHashes, ...fileHashes].sort();
    const hash = await executeCommand(
      `echo ${hashes.join("").trim()} | sha1sum`,
    );
    return hash.replace(/ +-/, "").replace(/\n/, "");
  }
}
