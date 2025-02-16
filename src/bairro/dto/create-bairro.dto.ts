import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBairroDto {
  @ApiProperty({
    example: 'Centro',
    description: 'Nome do bairro que será cadastrado',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: 1,
    description: 'ID da cidade à qual o bairro pertence',
  })
  @IsInt()
  cidadeId: number;
}
