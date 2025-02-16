import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { UpdateProntuarioDto } from './dto/update-prontuario.dto';

@Injectable()
export class ProntuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(usuarioId: number, createProntuarioDto: CreateProntuarioDto) {
    // Criar o prontuário no banco de dados, sem passar o usuarioId diretamente no modelo Prontuario
    return this.prisma.prontuario.create({
      data: {
        consultaId: createProntuarioDto.consultaId,
        observacoes: createProntuarioDto.observacoes,
      },
    });
  }

  async findAll() {
    // Retorna todos os prontuários
    return this.prisma.prontuario.findMany();
  }

  async findOne(id: number) {
    // Busca um prontuário pelo ID
    return this.prisma.prontuario.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProntuarioDto: UpdateProntuarioDto) {
    // Atualiza as informações de um prontuário pelo ID
    return this.prisma.prontuario.update({
      where: { id },
      data: {
        consultaId: updateProntuarioDto.consultaId,
        observacoes: updateProntuarioDto.observacoes,
      },
    });
  }

  async remove(id: number) {
    // Remove um prontuário pelo ID
    return this.prisma.prontuario.delete({
      where: { id },
    });
  }
}
