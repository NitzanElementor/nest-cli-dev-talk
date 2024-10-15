import { Module } from '@nestjs/common';
import { Command, CommandRunner } from 'nest-commander';


@Command({
  name: 'hello',
  arguments: '<name>'
})
class Greeter extends CommandRunner {
  async run(args: string[]){
    console.log(`Hello ${args}`)
  }

}

@Module({
  providers: [Greeter]
})
export class AppModule {}
