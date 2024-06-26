import { Injectable } from '@nestjs/common'
import type { CreateAppDto } from './dto/create-app.dto'
import type { UpdateAppDto } from './dto/update-app.dto'

@Injectable()
export class AppService {
  create(createAppDto: CreateAppDto) {
    return 'This action adds a new app'
  }

  findAll() {
    return `This action returns all app`
  }

  findOne(id: number) {
    return `This action returns a #${id} app`
  }

  update(id: number, updateAppDto: UpdateAppDto) {
    return `This action updates a #${id} app`
  }

  remove(id: number) {
    return `This action removes a #${id} app`
  }
}
