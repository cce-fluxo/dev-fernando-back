import { 
  Injectable, 
  UnauthorizedException, 
  ConflictException,
  NotFoundException 
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/entities/usuario.entity';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';

// Interface para o usuário com os campos de reset
interface UsuarioWithReset extends Usuario {
  resetToken?: string | null;
  resetTokenExpiry?: Date | null;
}

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

    return usuario;
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
  async forgotPassword(email: string) {
    const usuario = await this.usuarioService.findByEmail(email);
    if (!usuario) {
      throw new NotFoundException('Email não encontrado.');
    }

    const resetToken = uuidv4();
    const resetTokenExpiry = new Date(Date.now() + 3600000);

    await this.usuarioService.saveResetToken(usuario.id, resetToken, resetTokenExpiry);

    return {
      message: 'Se um usuário com este email existir, um link de redefinição de senha será enviado.',
      token: resetToken
    };
  }

  async resetPassword(token: string, newPassword: string) {
    const usuario = await this.usuarioService.findByResetToken(token) as UsuarioWithReset;
    
    if (!usuario || !usuario.resetTokenExpiry) {
      throw new UnauthorizedException('Token inválido ou expirado.');
    }

    const tokenExpiry = new Date(usuario.resetTokenExpiry);
    if (new Date() > tokenExpiry) {
      throw new UnauthorizedException('Token expirado.');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.usuarioService.updatePassword(usuario.id, hashedPassword);

    return { message: 'Senha atualizada com sucesso.' };
  }
}