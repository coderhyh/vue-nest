import { Injectable } from '@nestjs/common';
import { CreateHyhDto } from './dto/create-hyh.dto';
import { UpdateHyhDto } from './dto/update-hyh.dto';

@Injectable()
export class HyhService {
  create(createHyhDto: CreateHyhDto) {
    return 'This action adds a new hyh';
  }

  findAll() {
    return `This action returns all hyh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hyh`;
  }

  update(id: number, updateHyhDto: UpdateHyhDto) {
    return `This action updates a #${id} hyh`;
  }

  remove(id: number) {
    return `This action removes a #${id} hyh`;
  }
}
