import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateMedicoDto {
  @ApiProperty({ example: 1, description: 'ID do usuário associado ao médico' })
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({ example: '123456-RJ', description: 'Número do CRM do médico' })
  @IsString()
  @IsNotEmpty()
  crm: string;

  @ApiProperty({ example: 'Ativo', description: 'Status do médico' })
  @IsString()
  @IsNotEmpty()
  status: string;
}
