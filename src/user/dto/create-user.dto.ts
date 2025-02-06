import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
} from 'class-validator';

export class CreateUserDto extends User {
  @ApiProperty({
    example: 'email@gmail.com',
    description: `Email que o usuário utilizará para acessar a sua conta.`,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '123abc456',
    description: `Senha que o usuário utilizará para acessar a sua conta.`,
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'Cecilia',
    description: `Nome do usuário que será exibido nas telas do app como perfil, chat, et..`,
  })
  @IsString()
  name: string;
}