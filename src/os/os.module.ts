import { Module } from "@nestjs/common";
import { LSOFCommand } from "./commands/lsof.command";

@Module({
    providers: [LSOFCommand]
})
export class OsModule {}