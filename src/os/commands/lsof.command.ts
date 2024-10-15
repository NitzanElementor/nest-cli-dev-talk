import { spawnSync } from "child_process";
import { Command, CommandRunner, Option} from "nest-commander";

type CommandOptions = {
    port: string;
}

@Command({ 
    name: 'lsof'
 })
export class LSOFCommand extends CommandRunner {
  async run(args: string[], options: CommandOptions) {
    console.log('args', args)
    console.log('options', options)
    const inputs = [];
    if (options.port) {
        inputs.push('-i', `:${options.port}`)
    }
    const output = spawnSync('lsof', inputs, { shell: '/bin/bash' })
    console.log(output.stdout.toString())
  }

  @Option({
    description: 'Specify which port to check',
    flags: "-p --port <port>"
  })
  getPort(val: string) {
    return val;
  }
}