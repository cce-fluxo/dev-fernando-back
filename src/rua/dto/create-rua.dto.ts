import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRuaDto {
  @ApiProperty({
    description: 'Nome da rua',
    example: 'Rua dos Alfeneiros',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'ID do bairro relacionado',
    example: 1,
  })
  @IsInt()
  bairroId: number;
}
