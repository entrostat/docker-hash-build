import * as path from "node:path";
import { container } from "tsyringe";
import { HashService } from "./hash.service";
import { DockerBuildOptions } from "../models/docker-build-options";

export async function generateHash(dockerBuildOptions: DockerBuildOptions) {
  const directories = dockerBuildOptions.watchDirectory.map((d) =>
    path.resolve("./", d),
  );
  const files = dockerBuildOptions.watchFile.map((f) => path.resolve("./", f));

  const hashService = container.resolve(HashService);

  if (directories.length > 0 || files.length > 0) {
    return await hashService.hash(directories, files);
  } else {
    return await hashService.hash(
      [path.resolve("./", dockerBuildOptions.directory)],
      [],
    );
  }
}
