import { spawnSync } from "child_process";
import { Command, CommandRunner, Option } from "nest-commander";
import { KillCommand } from "../subcommands/kill.command";
import { SelectCommand } from "../subcommands/select.command";

@Command({ 
    name: 'lsof',
    subCommands: [KillCommand, SelectCommand]
 })
export class LSOFCommand extends CommandRunner {
  async run() {
    const output = spawnSync('lsof', { shell: '/bin/bash' })
    console.log(output.stdout.toString())
  }
}