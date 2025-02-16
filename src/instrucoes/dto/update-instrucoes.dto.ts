import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrucoesDto } from './create-instrucoes.dto';

export class UpdateInstrucoesDto extends PartialType(CreateInstrucoesDto) {}
