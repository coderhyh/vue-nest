import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { HyhController } from './hyh.controller'
import { HyhService } from './hyh.service'

describe('HyhController', () => {
  let controller: HyhController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HyhController],
      providers: [HyhService],
    }).compile()

    controller = module.get<HyhController>(HyhController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
