import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultaDto } from './create-consulta.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateConsultaDto extends PartialType(CreateConsultaDto) {
  @ApiProperty({ description: 'Novo status da consulta', example: 'Cancelada' })
  status?: string;
}
