import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCampoDoProntuarioDto } from './dto/create-campo-do-protuario.dto';
import { UpdateCampoDoProntuarioDto } from './dto/update-campo-do-prontuario.dto';

@Injectable()
export class CampoDoProntuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCampoDoProntuarioDto: CreateCampoDoProntuarioDto) {
    return this.prisma.campoDoProntuario.create({
      data: {
        observacoes: createCampoDoProntuarioDto.observacoes,
        prontuario: {
          connect: { id: createCampoDoProntuarioDto.prontuarioId }, // Relaciona o prontuário
        },
      },
    });
  }
  

  async findAll() {
    return this.prisma.campoDoProntuario.findMany();
  }

  async findOne(id: number) {
    return this.prisma.campoDoProntuario.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateData: UpdateCampoDoProntuarioDto) {
    return this.prisma.campoDoProntuario.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    return this.prisma.campoDoProntuario.delete({
      where: { id },
    });
  }
}
