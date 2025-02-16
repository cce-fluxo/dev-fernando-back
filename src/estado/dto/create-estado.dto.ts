import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEstadoDto {
  @ApiProperty({ 
    example: 'Nome do estado', 
    description: 'Rio de Janeiro' 
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ 
    example: 'País a qual o estado pertence', 
    description: 'Brasil' 
  })
  @IsInt()
  paisId: number;
}
