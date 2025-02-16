import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';

@Injectable()
export class AgendaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAgendaDto: CreateAgendaDto) {
    return this.prisma.agenda.create({
      data: createAgendaDto,
    });
  }

  async findAll() {
    return this.prisma.agenda.findMany({
      include: {
        medico: true,
        clinica: true,
      },
    });
  }

  async findOne(id: number) {
    const agenda = await this.prisma.agenda.findUnique({
      where: { id },
      include: {
        medico: true,
        clinica: true,
      },
    });

    if (!agenda) {
      throw new NotFoundException(`Agenda com ID ${id} não encontrada.`);
    }

    return agenda;
  }

  async update(id: number, updateAgendaDto: UpdateAgendaDto) {
    return this.prisma.agenda.update({
      where: { id },
      data: updateAgendaDto,
    });
  }

  async remove(id: number) {
    return this.prisma.agenda.delete({
      where: { id },
    });
  }
}
