import { spawnSync } from "child_process";
import { CommandRunner, InquirerService, Option, SubCommand } from "nest-commander";
import { AreYouSureQuestion } from "../questions/are.you.sure.question";

type CommandOptions = {
    port: string;
    skipQuestion?: boolean;
}

@SubCommand({ 
    name: 'kill',
 })
export class KillCommand extends CommandRunner {
    constructor(private readonly inquirer: InquirerService){
        super();
    }

  async run(_args: string[], options: CommandOptions) {
    const inputs = [];
    if (options.port) {
        inputs.push('-i', `:${options.port}`, '|', 'tail -1')
    }
    const output = spawnSync('lsof', inputs, { shell: '/bin/bash' })
    const [app, pid] = output.stdout.toString().replaceAll(/\s+/g, ' ').split(' ');
    console.log(`Going to kill ${app}, pid: ${pid} on port ${options.port}`);

    // Question
    if (!options.skipQuestion) {
        const result = await this.inquirer.ask('are-you-sure', null)
        if (result['are-you-sure'] !== 'yes') {
            console.log('Not killing process');
            return;
        }
    }
    
    // Kill the process
    spawnSync('kill', ['-9', pid], { shell: '/bin/bash' }) 
    console.log('Process killed');
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

  @Option({
    name: 'skipQuestion',
    description: 'Kills the process without asking',
    flags: "-y, --yes",
    
  })
  getSkipQuestion() {
    return true;
  }
}