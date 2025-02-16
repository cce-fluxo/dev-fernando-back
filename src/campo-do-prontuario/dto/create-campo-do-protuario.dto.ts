import { IsInt, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCampoDoProntuarioDto {
  @ApiProperty({
    description: 'ID do campo do prontuário',
    example: 1,
  })
  @IsInt()
  id: number;

  @ApiProperty({
    description: 'Observações sobre o campo do prontuário',
    example: 'Observação detalhada sobre o campo.',
  })
  @IsString()
  @MaxLength(255)
  observacoes: string;
}
