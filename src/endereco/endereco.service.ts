import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Injectable()
export class EnderecoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    return this.prisma.endereco.create({
      data: {
        ruaId: createEnderecoDto.ruaId,
      },
    });
  }

  async findAll() {
    return this.prisma.endereco.findMany({
      include: {
        rua: {
          include: {
            bairro: {
              include: {
                cidade: {
                  include: {
                    estado: {
                      include: {
                        pais: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        clinicas: true,
      },
    });
  }

  async findOne(id: number) {
    const endereco = await this.prisma.endereco.findUnique({
      where: { id },
      include: {
        rua: {
          include: {
            bairro: {
              include: {
                cidade: {
                  include: {
                    estado: {
                      include: {
                        pais: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        clinicas: true,
      },
    });

    if (!endereco) {
      throw new NotFoundException(`Endereço com ID ${id} não encontrado`);
    }

    return endereco;
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return this.prisma.endereco.update({
      where: { id },
      data: updateEnderecoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.endereco.delete({
      where: { id },
    });
  }
}
