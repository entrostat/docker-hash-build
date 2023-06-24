import { DockerBuildOptions } from "../models/docker-build-options";
import { plainToInstance } from "class-transformer";

export function rawToDockerBuildOptions<T, U>(flags: T, args: U) {
  return plainToInstance(
    DockerBuildOptions,
    {
      ...flags,
      ...args,
    },
    {
      strategy: "excludeAll",
    },
  );
}
