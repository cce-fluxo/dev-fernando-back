import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMedicoDto } from './dto/create-medico.dto';

@Injectable()
export class MedicoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(usuarioId: number, createMedicoDto: CreateMedicoDto) {
    return this.prisma.medico.create({
      data: { usuarioId, ...createMedicoDto },
    });
  }

  async findAll() {
    return this.prisma.medico.findMany();
  }

  async findOne(id: number) {
    return this.prisma.medico.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateData: Partial<CreateMedicoDto>) {
    return this.prisma.medico.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    return this.prisma.medico.delete({
      where: { id },
    });
  }
}
