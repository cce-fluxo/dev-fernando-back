import {
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { LocalAuthGuard } from './guards/local-auth.guard';
  import { IsPublic } from './decorators/is-public.decorator';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';

  @ApiTags('auth')
  @Controller()
  export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({
      summary: 'Rota para fazer login no sistema',
      description: 'Insira email e senha para fazer login no sistema',
    })
    @IsPublic()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
  }