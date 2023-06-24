import { DockerBuildOptions } from "../../models/docker-build-options";

export function generateImageName(
  dockerBuildOptions: DockerBuildOptions,
  hashOrTag: string,
) {
  return dockerBuildOptions.registry
    ? `${dockerBuildOptions.registry}/${dockerBuildOptions.imageName}:${hashOrTag}`
    : `${dockerBuildOptions.imageName}:${hashOrTag}`;
}
