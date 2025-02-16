import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Injectable()
export class ConsultaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(usuarioId: number, createConsultaDto: CreateConsultaDto) {
    return this.prisma.consulta.create({
      data: { ...createConsultaDto },
    });
  }

  async findAll() {
    return this.prisma.consulta.findMany();
  }

  async findOne(id: number) {
    return this.prisma.consulta.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateData: UpdateConsultaDto) {
    return this.prisma.consulta.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    return this.prisma.consulta.delete({
      where: { id },
    });
  }
}
