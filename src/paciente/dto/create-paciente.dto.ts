import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreatePacienteDto {
  @ApiProperty({
    example: 'Histórico do paciente',
    description: 'Descrição do histórico médico do paciente (opcional)',
    required: false,
  })
  @IsOptional()
  @IsString()
  historico?: string;

  @ApiProperty({
    example: 1,
    description: 'ID do usuário associado ao paciente',
    required: true,
  })
  @IsInt()
  usuarioId: number;
}
