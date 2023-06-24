import { DockerBuildOptions } from "../../models/docker-build-options";
import { createBuildxBuilder } from "./create-buildx-builder";
import { generateImageTags } from "../generate-image-tags";
import { executeCommand } from "../execute-command";
import { generateImageName } from "./generate-image-name";

export async function buildFromNewHash(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  await createBuildxBuilder();
  const tags = await generateImageTags(dockerBuildOptions);
  tags.push(hash);
  const platforms = dockerBuildOptions.platforms.join(",");
  for (const tag of tags) {
    const imageName = generateImageName(dockerBuildOptions, tag);
    await executeCommand(
      `docker buildx build ${dockerBuildOptions.directory} -f ${dockerBuildOptions.dockerfilePath} --platform ${platforms} -t ${imageName}`,
    );
  }
}
