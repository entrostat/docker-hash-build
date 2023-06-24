import { executeCommand } from "../execute-command";
import { dockerBuildxBuilderNameConstant } from "./docker-buildx-builder-name.constant";

const builderName = dockerBuildxBuilderNameConstant;
export async function createBuildxBuilder() {
  // 1. Try to remove existing builders
  try {
    await executeCommand(`docker buildx rm ${builderName}`);
  } catch (e) {
    if (
      typeof e !== "string" ||
      !e.includes(`ERROR: no builder "${builderName}" found`)
    ) {
      console.error(e);
      throw e;
    }
  }

  // 2. Create new builder
  await executeCommand(`docker buildx create --name ${builderName}`);

  // 3. Use the latest builder
  await executeCommand(`docker buildx use ${builderName}`);
}
