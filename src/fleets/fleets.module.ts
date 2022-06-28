import { HttpModule, Module } from '@nestjs/common';
import { FleetsService } from './fleets.service';
import { FleetsController } from './fleets.controller';

@Module({
  imports: [HttpModule],
  controllers: [FleetsController],
  providers: [FleetsService],
})
export class FleetsModule {}
