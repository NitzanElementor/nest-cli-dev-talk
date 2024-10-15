import { spawnSync } from "child_process";
import { CommandRunner, Option, SubCommand } from "nest-commander";

type CommandOptions = {
    port: string;
}

@SubCommand({ 
    name: 'kill',
 })
export class KillCommand extends CommandRunner {
  async run(_args: string[], options: CommandOptions) {
    const inputs = [];
    if (options.port) {
        inputs.push('-i', `:${options.port}`, '|', 'tail -1')
    }
    const output = spawnSync('lsof', inputs, { shell: '/bin/bash' })
    const [app, port] = output.stdout.toString().replaceAll(/\s+/g, ' ').split(' ');
  }

  @Option({
    name: 'port',
    description: 'Specify which port to check',
    flags: "-p, --port <port>",
    required: true
  })

  getPort(val: string) {
    return val;
  }
}