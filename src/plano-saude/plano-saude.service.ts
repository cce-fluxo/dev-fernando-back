import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanoSaudeDto } from './dto/create-plano-saude.dto';
import { UpdatePlanoSaudeDto } from './dto/update-plano-saude.dto';

@Injectable()
export class PlanoSaudeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePlanoSaudeDto) {
    return this.prisma.planoSaude.create({ data });
  }

  async findAll() {
    return this.prisma.planoSaude.findMany();
  }

  async findOne(id: number) {
    const plano = await this.prisma.planoSaude.findUnique({ where: { id } });
    if (!plano) throw new NotFoundException('Plano de saúde não encontrado');
    return plano;
  }

  async update(id: number, data: UpdatePlanoSaudeDto) {
    return this.prisma.planoSaude.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.planoSaude.delete({ where: { id } });
  }
}
