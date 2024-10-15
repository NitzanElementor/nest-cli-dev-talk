import { Module } from '@nestjs/common';
import { OsModule } from './os/os.module';
@Module({
  imports: [OsModule],
})
export class AppModule {}
