import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstadoDto } from './dto/create-estado.dto';

@Injectable()
export class EstadoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEstadoDto: CreateEstadoDto) {
    return this.prisma.estado.create({
      data: {
        nome: createEstadoDto.nome,
        paisId: createEstadoDto.paisId,
      },
    });
  }

  async findAll() {
    return this.prisma.estado.findMany();
  }

  async findOne(id: number) {
    return this.prisma.estado.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEstadoDto: any) {
    return this.prisma.estado.update({
      where: { id },
      data: updateEstadoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.estado.delete({
      where: { id },
    });
  }
}
