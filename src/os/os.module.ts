import { Module } from "@nestjs/common";
import { LSOFCommand } from "./commands/lsof.command";
import { KillCommand } from "./subcommands/kill.command";
import { SelectCommand } from "./subcommands/select.command";
import { AreYouSureQuestion } from "./questions/are.you.sure.question";

@Module({
    providers: [LSOFCommand, KillCommand, SelectCommand, AreYouSureQuestion]
})
export class OsModule {}