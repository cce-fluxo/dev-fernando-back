import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Prisma } from '@prisma/client'; // Adicione isso

@Injectable()
export class PacienteService {
  constructor(private prisma: PrismaService) {}

  async create(createPacienteDto: CreatePacienteDto) {
    const { usuarioId, historico } = createPacienteDto;
  
    return this.prisma.paciente.create({
      data: {
        usuario: {
          connect: { id: usuarioId }, // Agora `usuarioId` já é um número
        },
        historico,
      },
    });
  }
  

  async findAll() {
    return this.prisma.paciente.findMany();
  }

  async findOne(id: string) {
    const paciente = await this.prisma.paciente.findUnique({ where: { id: Number(id) } });
    if (!paciente) {
      throw new NotFoundException('Paciente não encontrado');
    }
    return paciente;
  }

  async update(id: string, updatePacienteDto: UpdatePacienteDto) {
    return this.prisma.paciente.update({
      where: { id: Number(id) },
      data: {
        historico: updatePacienteDto.historico, // Atribuir explicitamente
      },
    });
  }
  

  async remove(id: string) {
    return this.prisma.paciente.delete({
      where: { id: Number(id) },
    });
  }
  
}
