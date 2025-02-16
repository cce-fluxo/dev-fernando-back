import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAvaliacaoDto) {
    return this.prisma.avaliacao.create({ data });
  }

  async findAll() {
    return this.prisma.avaliacao.findMany({
      include: { medico: true, paciente: true },
    });
  }

  async findOne(id: number) {
    const avaliacao = await this.prisma.avaliacao.findUnique({
      where: { id },
      include: { medico: true, paciente: true },
    });
    if (!avaliacao) {
      throw new NotFoundException('Avaliação não encontrada');
    }
    return avaliacao;
  }

  async update(id: number, data: UpdateAvaliacaoDto) {
    return this.prisma.avaliacao.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.avaliacao.delete({
      where: { id },
    });
  }
}
