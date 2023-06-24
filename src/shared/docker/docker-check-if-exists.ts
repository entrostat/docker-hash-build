import { DockerBuildOptions } from "../../models/docker-build-options";
import { generateImageName } from "./generate-image-name";
import { executeCommand } from "../execute-command";

export async function dockerCheckIfExists(
  dockerBuildOptions: DockerBuildOptions,
  hash: string,
) {
  console.log("Checking if image and hash already exists");
  const imageName = generateImageName(dockerBuildOptions, hash);
  const result = await executeCommand(
    `docker manifest inspect ${imageName} > /dev/null ; echo $?`,
  );
  return result.trim() === "0";
}
