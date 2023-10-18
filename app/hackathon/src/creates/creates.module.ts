import { Module } from '@nestjs/common';
import { CreatesController } from './creates.controller';
import { CreatesService } from './creates.service';

@Module({
  controllers: [CreatesController],
  providers: [CreatesService],
})
export class CreatesModule {}

