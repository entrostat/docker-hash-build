import { DockerBuildOptions } from "../models/docker-build-options";
import { packageJsonVersion } from "./package-json-version";

export async function generateImageTags(
  dockerBuildOptions: DockerBuildOptions,
) {
  const version = await packageJsonVersion(dockerBuildOptions.directory);
  const tags: string[] = [];

  for (const tag of dockerBuildOptions.tag) {
    tags.push(`${tag}-${version}`);
  }

  if (dockerBuildOptions.latest) {
    tags.push(`latest`);
  }

  return tags;
}
