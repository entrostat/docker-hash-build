import { DockerBuildOptions } from "../models/docker-build-options";
import { packageJsonVersion } from "./package-json-version";
import * as path from "node:path";
export async function generateImageTags(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  const version = await packageJsonVersion(dockerBuildOptions.package);
  const tags: string[] = [hash];

  for (const tag of dockerBuildOptions.tag) {
    tags.push(`${tag}-${version}`);
  }

  if (dockerBuildOptions.tag.length === 0) {
    tags.push(version);
  }

  if (dockerBuildOptions.latest) {
    tags.push(`latest`);
  }

  return tags;
}
