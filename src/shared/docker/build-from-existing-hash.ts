import { DockerBuildOptions } from "../../models/docker-build-options";
import { createBuildxBuilder } from "./create-buildx-builder";

export async function buildFromExistingHash(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  await createBuildxBuilder();
}
