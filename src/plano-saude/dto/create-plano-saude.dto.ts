import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanoSaudeDto {
  @ApiProperty({
    example: 'Unimed',
    description: 'Tipo do plano de saúde a ser cadastrado (e.g., Unimed, Hapvida, etc.)',
  })
  @IsNotEmpty()
  @IsString()
  tipo: string;
}
