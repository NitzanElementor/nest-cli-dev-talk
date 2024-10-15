import { Module } from "@nestjs/common";
import { LSOFCommand } from "./commands/lsof.command";
import { KillCommand } from "./subcommands/kill.command";
import { SelectCommand } from "./subcommands/select.command";

@Module({
    providers: [LSOFCommand, KillCommand, SelectCommand]
})
export class OsModule {}