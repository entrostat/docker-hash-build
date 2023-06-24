import { DockerBuildOptions } from "../../models/docker-build-options";
import { generateImageName } from "./generate-image-name";
import { executeCommand } from "../execute-command";
import { installRegctl } from "../install-regctl";

export async function dockerCheckIfExists(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  console.log("Checking if image and hash already exists");
  const regctlPath = await installRegctl();
  const imageName = generateImageName(dockerBuildOptions, hash);
  try {
    await executeCommand(`${regctlPath} manifest head ${imageName}`);
    return true;
  } catch (e) {
    return false;
  }
}
