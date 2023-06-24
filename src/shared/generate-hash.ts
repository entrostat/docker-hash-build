import * as path from "node:path";
import { container } from "tsyringe";
import { HashService } from "./hash.service";
import { DockerBuildOptions } from "../models/docker-build-options";

export async function generateHash(dockerBuildOptions: DockerBuildOptions) {
  const directories = [
    ...dockerBuildOptions.watchDirectory,
    dockerBuildOptions.directory,
  ].map((d) => path.resolve("./", d));
  const files = dockerBuildOptions.watchFile.map((f) => path.resolve("./", f));

  const hashService = container.resolve(HashService);
  return await hashService.hash(directories, files);
}
