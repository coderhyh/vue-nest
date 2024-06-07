/* eslint-disable ts/consistent-type-imports */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { HyhService } from './hyh.service'
import { CreateHyhDto } from './dto/create-hyh.dto'
import { UpdateHyhDto } from './dto/update-hyh.dto'

@Controller('hyh')
export class HyhController {
  constructor(private readonly hyhService: HyhService) {}

  @Post()
  create(@Body() createHyhDto: CreateHyhDto) {
    return this.hyhService.create(createHyhDto)
  }

  @Get()
  findAll() {
    return this.hyhService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hyhService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHyhDto: UpdateHyhDto) {
    return this.hyhService.update(+id, updateHyhDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hyhService.remove(+id)
  }
}
