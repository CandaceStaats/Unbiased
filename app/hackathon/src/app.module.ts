import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplyModule } from './apply/apply.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ApplyModule],
})
export class AppModule {}
