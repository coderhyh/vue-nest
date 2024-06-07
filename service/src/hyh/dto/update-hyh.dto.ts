import { PartialType } from '@nestjs/mapped-types';
import { CreateHyhDto } from './create-hyh.dto';

export class UpdateHyhDto extends PartialType(CreateHyhDto) {}
