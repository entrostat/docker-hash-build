import { spawn } from "child_process";

export async function executeCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`${command}`);
    const myCommand = spawn(command, [], {
      shell: true,
    });
    let stdout = "";
    let stderr = "";
    myCommand?.stdout?.on("data", (data) => {
      console.log(data.toString());
      stdout += data.toString();
    });
    myCommand?.stderr?.on("data", (data) => {
      console.warn(data.toString());
      stderr += data.toString();
    });
    myCommand?.on("exit", (code) => {
      if (code === 0) {
        return resolve(stdout.toString());
      } else {
        return reject(stderr.toString());
      }
    });
  });
}
