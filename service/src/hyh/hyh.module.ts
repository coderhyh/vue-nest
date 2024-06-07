import { Module } from '@nestjs/common'
import { HyhService } from './hyh.service'
import { HyhController } from './hyh.controller'

@Module({
  controllers: [HyhController],
  providers: [HyhService],
})
export class HyhModule {}
