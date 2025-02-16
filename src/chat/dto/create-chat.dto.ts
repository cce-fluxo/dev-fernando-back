import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min, Max, IsOptional } from 'class-validator';

export class CreateChatDto {
  @ApiProperty({ example: 1, description: 'ID do médico participante do chat' })
  @IsInt({ message: 'medicoId deve ser um número inteiro' })
  medicoId: number;

  @ApiProperty({ example: 2, description: 'ID do paciente participante do chat' })
  @IsInt({ message: 'pacienteId deve ser um número inteiro' })
  pacienteId: number;

  @ApiProperty({ example: 'ativo', description: 'Status atual do chat' })
  @IsString({ message: 'status deve ser uma string' })
  status: string;

  @ApiProperty({ example: 60, description: 'Tempo limite da sessão do chat em minutos' })
  @IsInt({ message: 'tempoLimite deve ser um número inteiro' })
  @Min(1, { message: 'tempoLimite deve ser no mínimo 1 minuto' })
  @Max(1440, { message: 'tempoLimite deve ser no máximo 1440 minutos (24 horas)' })
  tempoLimite: number;
}