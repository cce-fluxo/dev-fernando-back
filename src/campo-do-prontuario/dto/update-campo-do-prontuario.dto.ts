import { PartialType } from '@nestjs/mapped-types';
import { CreateCampoDoProntuarioDto } from './create-campo-do-protuario.dto';

export class UpdateCampoDoProntuarioDto extends PartialType(CreateCampoDoProntuarioDto) {}
