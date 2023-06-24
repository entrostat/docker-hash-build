import { executeCommand } from "./execute-command";
import * as fs from "fs-extra";

export async function installRegctl() {
  try {
    return await executeCommand(`which regctl`);
  } catch (e) {}
  const installPath = `/tmp/regctl`;

  const exists = await fs.exists(installPath);
  if (exists) {
    return installPath;
  }

  await executeCommand(
    `curl -L https://github.com/regclient/regclient/releases/latest/download/regctl-linux-amd64 > ${installPath}`,
  );
  await executeCommand(`chmod 755 ${installPath}`);
  return installPath;
}
