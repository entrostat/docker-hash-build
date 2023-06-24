import { DockerBuildOptions } from "../../models/docker-build-options";
import { executeCommand } from "../execute-command";

export async function dockerLogin(dockerBuildOptions: DockerBuildOptions) {
  if (
    !dockerBuildOptions.dockerUsername ||
    !dockerBuildOptions.dockerPassword
  ) {
    console.log("No docker username or password provided, skipping login");
    return;
  }
  console.log("Logging into docker");
  await executeCommand(
    `docker login -u "${dockerBuildOptions.dockerUsername}" -p "${
      dockerBuildOptions.dockerPassword
    }" ${dockerBuildOptions.registry || ""}`,
  );
}
