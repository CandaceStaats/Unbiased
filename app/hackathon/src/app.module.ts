import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplyModule } from './apply/apply.module';

@Module({
  imports: [ApplyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
