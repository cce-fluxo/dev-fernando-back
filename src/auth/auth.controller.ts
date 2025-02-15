import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IsPublic } from './decorators/is-public.decorator';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth') // Prefixo 'auth' adicionado
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Registrar um novo usuário',
    description: 'Cria um novo usuário e retorna um token de acesso',
  })
  @IsPublic()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.authService.register(createUsuarioDto);
  }

  @ApiOperation({
    summary: 'Fazer login no sistema',
    description: 'Insira email e senha para obter um token de acesso',
  })
  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req) {
    return this.authService.login(req.user.email);
  }

  @ApiOperation({
    summary: 'Solicitar redefinição de senha',
    description: 'Envia um email com o token para redefinição de senha',
  })
  @IsPublic()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body('email') email: string) {
    return this.authService.forgotPassword(email);
  }

  @ApiOperation({
    summary: 'Redefinir senha',
    description: 'Redefine a senha usando o token recebido por email',
  })
  @IsPublic()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(
    @Body('token') token: string,
    @Body('senha') senha: string,
  ) {
    return this.authService.resetPassword(token, senha);
  }
}
