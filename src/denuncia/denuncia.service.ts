import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDenunciaDto } from './dto/create-denuncia.dto';
import { UpdateDenunciaDto } from './dto/update-denuncia.dto';

@Injectable()
export class DenunciaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDenunciaDto: CreateDenunciaDto) {
    return await this.prisma.denuncia.create({
      data: createDenunciaDto,
    });
  }

  async findAll() {
    return await this.prisma.denuncia.findMany();
  }

  async findOne(id: number) {
    const denuncia = await this.prisma.denuncia.findUnique({
      where: { id },
    });
    if (!denuncia) throw new NotFoundException('Denúncia não encontrada.');
    return denuncia;
  }

  async update(id: number, updateDenunciaDto: UpdateDenunciaDto) {
    await this.findOne(id);
    return await this.prisma.denuncia.update({
      where: { id },
      data: updateDenunciaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prisma.denuncia.delete({
      where: { id },
    });
  }
}
