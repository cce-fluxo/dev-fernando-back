import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstrucoesDto } from './dto/create-instrucoes.dto';
import { UpdateInstrucoesDto } from './dto/update-instrucoes.dto';

@Injectable()
export class InstrucoesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(usuarioId: number, createInstrucoesDto: CreateInstrucoesDto) {
    return this.prisma.instrucoes.create({
      data: { 
        ...createInstrucoesDto, // Espalha os dados do DTO
      },
    });
  }  


  async findAll() {
    return this.prisma.instrucoes.findMany();
  }

  async findOne(id: number) {
    return this.prisma.instrucoes.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateData: UpdateInstrucoesDto) {
    return this.prisma.instrucoes.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    return this.prisma.instrucoes.delete({
      where: { id },
    });
  }
}
