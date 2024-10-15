import { spawnSync } from "child_process";
import { Command, CommandRunner } from "nest-commander";

@Command({ name: 'lsof' })
export class LSOFCommand extends CommandRunner {
  async run() {
    const output = spawnSync('lsof', { shell: '/bin/bash' })
    console.log(output.stdout.toString())
  }
}