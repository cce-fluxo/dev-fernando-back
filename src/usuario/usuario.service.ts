import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const senhaCriptografada = await bcrypt.hash(createUsuarioDto.senha, 10);
    
    // Garantir que a data está no formato ISO completo
    let dataNascFormatada: string | Date = createUsuarioDto.dataNasc;
    if (!dataNascFormatada.includes('T')) {
      // Se não tiver o T, é porque não é o formato ISO completo
      dataNascFormatada = new Date(dataNascFormatada).toISOString();
    }
    
    const data: Prisma.UsuarioCreateInput = {
      email: createUsuarioDto.email,
      senha: senhaCriptografada,
      nome: createUsuarioDto.nome,
      sobrenome: createUsuarioDto.sobrenome,
      dataNasc: dataNascFormatada, // Usando a data formatada
      telefone: createUsuarioDto.telefone,
      foto: createUsuarioDto.foto,
      medico: createUsuarioDto.medico
        ? { create: { crm: createUsuarioDto.crm, status: 'ATIVO' } }
        : undefined,
      paciente: createUsuarioDto.paciente ? { create: {} } : undefined,
    };
    
    return this.prisma.usuario.create({ data });
  }
  

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany({
      include: { medico: true, paciente: true }, // Retornar os relacionamentos
    });
  }

  async findOne(id: number): Promise<Usuario> {
    return this.prisma.usuario.findUnique({
      where: { id },
      include: { medico: true, paciente: true }, // Retornar os relacionamentos
    });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const data: Prisma.UsuarioUpdateInput = {
      email: updateUsuarioDto.email,
      nome: updateUsuarioDto.nome,
      sobrenome: updateUsuarioDto.sobrenome,
      dataNasc: updateUsuarioDto.dataNasc,
      telefone: updateUsuarioDto.telefone,
      foto: updateUsuarioDto.foto,
      senha: updateUsuarioDto.senha
        ? await bcrypt.hash(updateUsuarioDto.senha, 10)
        : undefined,
      medico: updateUsuarioDto.medico
        ? { upsert: { create: { crm: updateUsuarioDto.crm, status: 'ATIVO' }, update: { status: 'ATUALIZADO' } } }
        : undefined,
      paciente: updateUsuarioDto.paciente ? { upsert: { create: {}, update: {} } } : undefined,
    };
  
    return this.prisma.usuario.update({ where: { id }, data });
  }
  
  

  async remove(id: number): Promise<Usuario> {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
