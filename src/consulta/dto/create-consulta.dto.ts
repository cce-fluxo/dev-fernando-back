import { IsInt, IsString, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConsultaDto {
  @ApiProperty({ description: 'ID do médico responsável pela consulta', example: 1 })
  @IsInt()
  medicoId: number;

  @ApiProperty({ description: 'ID do paciente da consulta', example: 2 })
  @IsInt()
  pacienteId: number;

  @ApiProperty({ description: 'Data e hora da consulta', example: '2025-03-01T10:00:00Z' })
  @IsDateString()
  dataHora: Date;

  @ApiProperty({ description: 'Status da consulta', example: 'Confirmada' })
  @IsString()
  status: string;

  @ApiProperty({ description: 'Tipo da consulta', example: 'Presencial' })
  @IsString()
  tipo: string;

  @ApiProperty({ description: 'Link do Waze para a localização da consulta', example: 'https://waze.com/ul/h123abc', required: false })
  @IsOptional()
  @IsString()
  linkWaze?: string;
}
