import { DockerBuildOptions } from "../../models/docker-build-options";
import { generateImageTags } from "../generate-image-tags";

export async function extractImageBuildDetails(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  const tags = await generateImageTags(dockerBuildOptions, hash);
  const platforms = dockerBuildOptions.platforms.join(",");
  return { tags, platforms };
}
