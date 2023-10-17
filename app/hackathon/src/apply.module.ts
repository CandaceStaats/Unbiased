import { Module } from '@nestjs/common';
import { ApplyController } from './apply.controller';
import { ApplyService } from './apply.service';

@Module({
  controllers: [ApplyController],
  providers: [ApplyService],
})
export class ApplyModule {}
