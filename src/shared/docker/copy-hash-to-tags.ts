import { DockerBuildOptions } from "../../models/docker-build-options";
import { createBuildxBuilder } from "./create-buildx-builder";
import { pullImage } from "./pull-image";
import { generateImageName } from "./generate-image-name";
import { generateImageTags } from "../generate-image-tags";
import { executeCommand } from "../execute-command";
import { extractImageBuildDetails } from "./extract-image-build-details";
import { installRegctl } from "../install-regctl";

export async function copyHashToTags(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  const hashImageName = generateImageName(dockerBuildOptions, hash);
  const { tags } = await extractImageBuildDetails(dockerBuildOptions, hash);
  const regctlPath = await installRegctl();
  for (const tag of tags) {
    const imageName = generateImageName(dockerBuildOptions, tag);
    await executeCommand(
      `${regctlPath} image copy -v info ${hashImageName} ${imageName}`,
    );
  }
}
