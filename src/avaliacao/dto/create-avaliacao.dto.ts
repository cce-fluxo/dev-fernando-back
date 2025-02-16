import { IsInt, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAvaliacaoDto {
  @ApiProperty({ description: 'ID do médico responsável pela avaliação', example: 1 })
  @IsInt()
  medicoId: number;

  @ApiProperty({ description: 'ID do paciente que recebeu a avaliação', example: 2 })
  @IsInt()
  pacienteId: number;

  @ApiProperty({ description: 'Conteúdo textual da avaliação', example: 'Ótima consulta, médico muito atencioso!' })
  @IsString()
  @MinLength(5)
  conteudo: string;
}
