import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { HyhService } from './hyh.service'

describe('HyhService', () => {
  let service: HyhService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HyhService],
    }).compile()

    service = module.get<HyhService>(HyhService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
