import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Medico')
@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @ApiOperation({ summary: 'Criar um novo médico' })
  @Post()
  async create(@Body() createMedicoDto: CreateMedicoDto) {
    const usuarioId = 1; // Defina como obter o usuarioId (por exemplo, via autenticação)
    return this.medicoService.create(usuarioId, createMedicoDto);
  }

  @ApiOperation({ summary: 'Listar todos os médicos' })
  @Get()
  async findAll() {
    return this.medicoService.findAll();
  }

  @ApiOperation({ summary: 'Buscar médico por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.medicoService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Atualizar informações de um médico' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: Partial<CreateMedicoDto>) {
    return this.medicoService.update(Number(id), updateData);
  }

  @ApiOperation({ summary: 'Remover um médico' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.medicoService.remove(Number(id));
  }
}
