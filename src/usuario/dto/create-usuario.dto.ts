import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional, IsDateString, IsEmail } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'cecilia@email.com',  description: 'Endereço de e-mail do usuário'})
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senhaSegura123', description: 'Senha para acesso à conta do usuário'})
  @IsString()
  senha: string;

  @ApiProperty({ example: 'Cecilia', description: 'Nome do usuário'})
  @IsString()
  nome: string;

  @ApiProperty({ example: 'Roxo', description: 'Sobrenome do usuário'})
  @IsString()
  sobrenome: string;

  @ApiProperty({ example: '1990-05-15T00:00:00.000Z', description: 'Data de nascimento do usuário'})
  @IsDateString()
  dataNasc: string;

  @ApiProperty({ example: '+55 21 6666-6666', description: 'Número de telefone do usuário'})
  @IsString()
  telefone: string;

  @ApiProperty({ required: false, example: 'https://example.com/foto.jpg', description: 'URL da foto do usuário'})
  @IsOptional()
  @IsString()
  foto?: string;

  @ApiProperty({ required: false, example: true, description: 'Indica se o usuário é médico'})
  @IsOptional()
  @IsBoolean()
  medico?: boolean;

  @ApiProperty({ required: false, example: true, description: 'Indica se o usuário é paciente'})
  @IsOptional()
  @IsBoolean()
  paciente?: boolean;

  @ApiProperty({ required: false, example: '123456-RJ', description: 'CRM do médico (caso o usuário seja médico)'})
  @IsOptional()
  @IsString()
  crm?: string;

  @ApiProperty({ required: false, example: '123.456.789-00', description: 'CPF do usuário'})
  @IsOptional()
  @IsString()
  cpf?: string;
}
