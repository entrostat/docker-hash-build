import { spawn } from "child_process";
import * as chalk from "chalk";

export async function executeCommand(command: string): Promise<string> {
  const terminalStyle = chalk.bgBlack.whiteBright;
  const terminalPrefixStyle = chalk.bgBlack.white;
  const terminalEmptyCharacterStyle = chalk.bgBlack;
  const terminalOutput = (cmd: string) => {
    const outputLength = ("  " + "$ " + cmd).length;
    let output = "  " + terminalPrefixStyle("$ ") + terminalStyle(cmd);
    if (outputLength < process.stdout.columns) {
      output += terminalEmptyCharacterStyle(" ").repeat(
        process.stdout.columns - outputLength,
      );
    }
    return output;
  };
  return new Promise((resolve, reject) => {
    console.log(terminalOutput(command));
    const myCommand = spawn(command, [], {
      shell: true,
    });
    let stdout = "";
    let stderr = "";
    myCommand?.stdout?.on("data", (data) => {
      const lines = (data.toString() || "").split("\n");
      console.log(lines.map((l: string) => terminalOutput(l)).join("\n"));
      stdout += data.toString();
    });
    myCommand?.stderr?.on("data", (data) => {
      const lines = (data.toString() || "").split("\n");
      console.warn(lines.map((l: string) => terminalOutput(l)).join("\n"));
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
