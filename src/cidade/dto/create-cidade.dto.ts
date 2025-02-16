import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCidadeDto {
  @ApiProperty({
    example: 'Rio de Janeiro',
    description: 'Nome da cidade que será cadastrada.',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: 1,
    description: 'ID do estado ao qual a cidade pertence.',
  })
  @IsInt()
  estadoId: number;
}
