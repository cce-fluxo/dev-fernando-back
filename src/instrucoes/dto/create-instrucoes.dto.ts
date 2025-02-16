import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateInstrucoesDto {
  @ApiProperty({
    description: 'ID da consulta associada à instrução',
    example: 1,
  })
  @IsInt()
  consultaId: number;

  @ApiProperty({
    description: 'Conteúdo da instrução',
    example: 'Instrução detalhada sobre o procedimento.',
  })
  @IsString()
  conteudo: string;
}
