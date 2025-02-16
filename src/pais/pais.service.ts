import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';

@Injectable()
export class PaisService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePaisDto) {
    return this.prisma.pais.create({ data });
  }

  findAll() {
    return this.prisma.pais.findMany();
  }

  findOne(id: number) {
    return this.prisma.pais.findUnique({ where: { id } });
  }

  update(id: number, data: UpdatePaisDto) {
    return this.prisma.pais.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.pais.delete({ where: { id } });
  }
}
