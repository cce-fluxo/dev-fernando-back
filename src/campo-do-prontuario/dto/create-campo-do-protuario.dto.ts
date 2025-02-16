import { IsInt, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCampoDoProntuarioDto {
  @ApiProperty({
    description: 'Observações sobre o campo do prontuário',
    example: 'Observação detalhada sobre o campo.',
  })
  @IsString()
  @MaxLength(255)
  observacoes: string;

  @ApiProperty({
    description: 'ID do prontuário relacionado',
    example: 1,
  })
  @IsInt()
  prontuarioId: number;  // Este campo precisa existir no DTO
}
