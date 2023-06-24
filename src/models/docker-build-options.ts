import { Expose, Transform } from "class-transformer";
import * as path from "node:path";
export class DockerBuildOptions {
  @Expose()
  @Transform(({ value, obj }) => {
    const dockerfilePath = value || obj["dockerfile-path"];
    if (!dockerfilePath) {
      // Default to the Dockerfile in the directory
      return path.join(obj.directory, "Dockerfile");
    }
    return dockerfilePath;
  })
  dockerfilePath!: string;

  @Expose()
  registry!: string;

  @Expose()
  @Transform(({ value }) => value || [])
  tag!: string[];

  @Expose()
  package!: string;

  @Expose()
  @Transform(({ value, obj }) => value || obj["watch-directory"] || [])
  watchDirectory!: string[];

  @Expose()
  @Transform(({ value, obj }) => value || obj["watch-file"] || [])
  watchFile!: string[];

  @Expose()
  @Transform(({ value, obj }) => value || obj["docker-build-flags"] || [])
  dockerBuildFlags!: string[];

  @Expose()
  @Transform(({ value, obj }) => value || obj["docker-username"])
  dockerUsername!: string;

  @Expose()
  @Transform(({ value, obj }) => value || obj["docker-password"])
  dockerPassword!: string;

  @Expose()
  latest!: boolean;

  @Expose()
  @Transform(({ value, obj }) => value || obj["platforms"] || [])
  platforms!: string[];

  @Expose()
  directory!: string;

  @Expose()
  @Transform(({ value, obj }) => value || obj["image-name"])
  imageName!: string;
}
