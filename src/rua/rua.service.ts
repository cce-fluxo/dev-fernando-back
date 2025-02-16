import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRuaDto } from './dto/create-rua.dto';

@Injectable()
export class RuaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRuaDto: CreateRuaDto) {
    return this.prisma.rua.create({
      data: {
        nome: createRuaDto.nome,
        bairroId: createRuaDto.bairroId,
      },
    });
  }

  async findAll() {
    return this.prisma.rua.findMany();
  }

  async findOne(id: number) {
    return this.prisma.rua.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRuaDto: any) {
    return this.prisma.rua.update({
      where: { id },
      data: updateRuaDto,
    });
  }

  async remove(id: number) {
    return this.prisma.rua.delete({
      where: { id },
    });
  }
}
