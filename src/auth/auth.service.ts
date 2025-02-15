import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuario/entities/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuarioService: UsuarioService,
  ) {}

  async validateUser(email: string, senha: string): Promise<Usuario | null> {
    const usuario = await this.usuarioService.findByEmail(email);
    if (!usuario) {
      return null;
    }
  
    const isPasswordValid = await bcrypt.compare(senha, usuario.senha);
    if (!isPasswordValid) {
      return null;
    }
  
    return usuario; // Retorna o usuário se a senha estiver correta
  }
  

  async register(createUsuarioDto: CreateUsuarioDto): Promise<{ access_token: string }> {
    // Verifica se o email já está cadastrado
    const usuarioExistente = await this.usuarioService.findByEmail(createUsuarioDto.email);
    if (usuarioExistente) {
      throw new ConflictException('Email já está em uso.');
    }

    // Cria o usuário no banco de dados
    const usuario = await this.usuarioService.create(createUsuarioDto);

    // Gera o token JWT para o novo usuário
    const payload = { sub: usuario.id, email: usuario.email, nome: usuario.nome };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(email: string): Promise<{ access_token: string }> {
    const usuario = await this.usuarioService.findByEmail(email);
    if (!usuario) {
      throw new UnauthorizedException('Email ou senha fornecidos estão incorretos.');
    }
  
    const payload = { sub: usuario.id, email: usuario.email, nome: usuario.nome };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
