import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';

@Injectable()
export class CidadeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCidadeDto: CreateCidadeDto) {
    return this.prisma.cidade.create({
      data: {
        nome: createCidadeDto.nome,
        estadoId: createCidadeDto.estadoId,
      },
    });
  }

  async findAll() {
    return this.prisma.cidade.findMany();
  }

  async findOne(id: number) {
    return this.prisma.cidade.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCidadeDto: any) {
    return this.prisma.cidade.update({
      where: { id },
      data: updateCidadeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.cidade.delete({
      where: { id },
    });
  }
}
