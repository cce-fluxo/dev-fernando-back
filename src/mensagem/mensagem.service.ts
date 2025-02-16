import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';

@Injectable()
export class MensagemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMensagemDto: CreateMensagemDto) {
    return this.prisma.mensagem.create({
      data: createMensagemDto,
    });
  }

  async findAll() {
    return this.prisma.mensagem.findMany();
  }

  async findOne(id: number) {
    return this.prisma.mensagem.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateMensagemDto: UpdateMensagemDto) {
    return this.prisma.mensagem.update({
      where: { id },
      data: updateMensagemDto,
    });
  }

  async remove(id: number) {
    return this.prisma.mensagem.delete({
      where: { id },
    });
  }
}
