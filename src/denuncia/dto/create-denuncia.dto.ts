import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateDenunciaDto {
  @ApiProperty({ example: 1, description: 'ID do médico relacionado à denúncia' })
  @IsInt()
  medicoId: number;

  @ApiProperty({ example: 2, description: 'ID do paciente que fez a denúncia' })
  @IsInt()
  pacienteId: number;

  @ApiProperty({ example: 'Pendente', description: 'Status da denúncia' })
  @IsString()
  status: string;

  @ApiProperty({ example: 'O médico não compareceu à consulta.', description: 'Conteúdo da denúncia' })
  @IsString()
  conteudo: string;
}
