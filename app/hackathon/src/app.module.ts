import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplyModule } from './apply/apply.module';
import { CreatesModule } from './creates/creates.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ApplyModule, CreatesModule],
})
export class AppModule {}
