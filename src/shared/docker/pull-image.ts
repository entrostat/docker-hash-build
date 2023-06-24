import { executeCommand } from "../execute-command";

export async function pullImage(image: string) {
  await executeCommand(`docker pull ${image}`);
}
