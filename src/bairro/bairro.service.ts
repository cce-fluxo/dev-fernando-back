import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBairroDto } from './dto/create-bairro.dto';

@Injectable()
export class BairroService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBairroDto: CreateBairroDto) {
    return this.prisma.bairro.create({
      data: {
        nome: createBairroDto.nome,
        cidadeId: createBairroDto.cidadeId,
      },
    });
  }

  async findAll() {
    return this.prisma.bairro.findMany();
  }

  async findOne(id: number) {
    return this.prisma.bairro.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBairroDto: any) {
    return this.prisma.bairro.update({
      where: { id },
      data: updateBairroDto,
    });
  }

  async remove(id: number) {
    return this.prisma.bairro.delete({
      where: { id },
    });
  }
}
