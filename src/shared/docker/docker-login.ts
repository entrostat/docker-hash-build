import { DockerBuildOptions } from "../../models/docker-build-options";
import { executeCommand } from "../execute-command";

export async function dockerLogin(dockerBuildOptions: DockerBuildOptions) {
  if (
    !dockerBuildOptions.dockerUsername ||
    !dockerBuildOptions.dockerPassword
  ) {
    return;
  }
  await executeCommand(
    `docker login -u "${dockerBuildOptions.dockerUsername}" -p "${
      dockerBuildOptions.dockerPassword
    }" ${dockerBuildOptions.registry || ""}`,
  );
}
