import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMedicoClinicaDto } from './dto/create-medico-clinica.dto';
import { UpdateMedicoClinicaDto } from './dto/update-medico-clinica.dto';

@Injectable()
export class MedicoClinicaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateMedicoClinicaDto) {
    return this.prisma.medicoClinica.create({ data });
  }

  async findAll() {
    return this.prisma.medicoClinica.findMany({
      include: {
        medico: true,
        clinica: true,
        planoSaude: true,
      },
    });
  }

  async findOne(id: number) {
    const associacao = await this.prisma.medicoClinica.findUnique({
      where: { id },
      include: {
        medico: true,
        clinica: true,
        planoSaude: true,
      },
    });

    if (!associacao) throw new NotFoundException('Associação não encontrada');
    return associacao;
  }

  async update(id: number, data: UpdateMedicoClinicaDto) {
    return this.prisma.medicoClinica.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.medicoClinica.delete({ where: { id } });
  }
}
