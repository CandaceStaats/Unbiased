import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
import { ApplyController } from './apply/apply.controller';
//import { AppService } from './app.service';
import { ApplyModule } from './apply/apply.module';
import { CreatesModule } from './creates/creates.module';
import { ApplyService } from './apply/apply.service';
import { CreatesService } from './creates/creates.service';
import { CreatesController } from './creates/creates.controller';

@Module({
  controllers: [ApplyController, CreatesController],
  providers: [ApplyService, CreatesService],
  imports: [ApplyModule, CreatesModule],
})
export class AppModule {}
