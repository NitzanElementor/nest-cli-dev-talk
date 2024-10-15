import { spawnSync } from "child_process";
import { Command, CommandRunner, Option } from "nest-commander";
import { KillCommand } from "../subcommands/kill.command";
@Command({ 
    name: 'location',
 })
export class LocationCommand extends CommandRunner {
  async run() {
    const output = spawnSync('pwd', { shell: '/bin/bash' })
    console.log(output.stdout.toString())
  }
}