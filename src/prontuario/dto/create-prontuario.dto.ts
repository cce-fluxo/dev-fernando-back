import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length } from 'class-validator';

export class CreateProntuarioDto {
  @ApiProperty({
    description: 'ID da consulta relacionada ao prontuário',
    example: 1,
  })
  @IsInt({ message: 'O ID da consulta deve ser um número inteiro' })
  consultaId: number;

  @ApiProperty({
    description: 'Observações relacionadas ao prontuário',
    example: 'Paciente apresenta sinais de melhoria.',
  })
  @IsString({ message: 'As observações devem ser uma string' })
  @Length(5, 500, { message: 'As observações devem ter entre 5 e 500 caracteres' })
  observacoes: string;
}
