import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEnderecoDto {
  @ApiProperty({
    example: 1, 
    description: 'ID da rua associada ao endereço. Esse campo é obrigatório e deve ser um número inteiro.'
  })
  @IsInt()
  ruaId: number;
}
