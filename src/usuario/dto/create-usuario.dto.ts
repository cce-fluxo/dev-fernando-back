import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional, IsDateString, IsEmail } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'cecilia@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senhaSegura123' })
  @IsString()
  senha: string;

  @ApiProperty({ example: 'Cecilia' })
  @IsString()
  nome: string;

  @ApiProperty({ example: 'Roxo' })
  @IsString()
  sobrenome: string;

  @ApiProperty({ example: '1990-05-15T00:00:00.000Z' })
  @IsDateString()
  dataNasc: string;

  @ApiProperty({ example: '+55 21 6666-6666' })
  @IsString()
  telefone: string;

  @ApiProperty({ required: false, example: 'https://example.com/foto.jpg' })
  @IsOptional()
  @IsString()
  foto?: string;

  @ApiProperty({ required: false, example: true })
  @IsOptional()
  @IsBoolean()
  medico?: boolean;

  @ApiProperty({ required: false, example: true })
  @IsOptional()
  @IsBoolean()
  paciente?: boolean;

  @ApiProperty({ required: false, example: '123456-RJ' })
  @IsOptional()
  @IsString()
  crm?: string;

  @ApiProperty({ required: false, example: '123.456.789-00' })
  @IsOptional()
  @IsString()
  cpf?: string;
}
