import { DockerBuildOptions } from "../../models/docker-build-options";
import { dockerLogin } from "./docker-login";
import { dockerCheckIfExists } from "./docker-check-if-exists";
import { copyHashToTags } from "./copy-hash-to-tags";
import { buildFromHash } from "./build-from-hash";

export async function dockerBuildWorkflow(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  await dockerLogin(dockerBuildOptions);
  const exists = await dockerCheckIfExists(dockerBuildOptions, hash);
  if (exists) {
    console.log(
      `An image with the hash ${hash} already exists, we'll tag it as a new version`,
    );
    await copyHashToTags(dockerBuildOptions, hash);
  } else {
    console.log(
      `An image with the hash ${hash} does not exist yet, we'll begin the build process`,
    );
    await buildFromHash(dockerBuildOptions, hash);
    await copyHashToTags(dockerBuildOptions, hash);
  }
}
