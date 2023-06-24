import { DockerBuildOptions } from "../../models/docker-build-options";
import { dockerLogin } from "./docker-login";
import { dockerCheckIfExists } from "./docker-check-if-exists";
import { buildFromExistingHash } from "./build-from-existing-hash";
import { buildFromNewHash } from "./build-from-new-hash";

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
    await buildFromExistingHash(dockerBuildOptions, hash);
  } else {
    console.log(
      `An image with the hash ${hash} does not exist yet, we'll begin the build process`,
    );
    await buildFromNewHash(dockerBuildOptions, hash);
  }
}
