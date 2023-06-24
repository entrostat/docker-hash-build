import { DockerBuildOptions } from "../../models/docker-build-options";
import { createBuildxBuilder } from "./create-buildx-builder";
import { executeCommand } from "../execute-command";
import { generateImageName } from "./generate-image-name";
import { extractImageBuildDetails } from "./extract-image-build-details";

export async function buildFromHash(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  await createBuildxBuilder();
  const { platforms, registry } = await extractImageBuildDetails(
    dockerBuildOptions,
    hash,
  );
  const imageName = generateImageName(dockerBuildOptions, hash);
  await executeCommand(
    `docker buildx build ${dockerBuildOptions.directory} -f ${dockerBuildOptions.dockerfilePath} --platform ${platforms} -t ${registry}${imageName} --push`,
  );
}
