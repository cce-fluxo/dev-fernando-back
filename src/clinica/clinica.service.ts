import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';

@Injectable()
export class ClinicaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClinicaDto: CreateClinicaDto) {
    return this.prisma.clinica.create({
      data: {
        nome: createClinicaDto.nome,
        enderecoId: createClinicaDto.enderecoId,
      },
    });
  }

  async findAll() {
    return this.prisma.clinica.findMany({
      include: {
        endereco: true,
        medicosClinicas: true,
        agendas: true,
      },
    });
  }

  async findOne(id: number) {
    const clinica = await this.prisma.clinica.findUnique({
      where: { id },
      include: {
        endereco: true,
        medicosClinicas: true,
        agendas: true,
      },
    });

    if (!clinica) {
      throw new NotFoundException(`Clínica com ID ${id} não encontrada`);
    }

    return clinica;
  }

  async update(id: number, updateClinicaDto: UpdateClinicaDto) {
    return this.prisma.clinica.update({
      where: { id },
      data: updateClinicaDto,
    });
  }

  async remove(id: number) {
    return this.prisma.clinica.delete({
      where: { id },
    });
  }
}
