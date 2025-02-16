import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaisDto {
  @ApiProperty({
    example: 'Brasil',
    description: 'Nome do país a ser cadastrado',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;
}
