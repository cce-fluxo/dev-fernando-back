import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Consulta')
@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @ApiOperation({ summary: 'Criar uma nova consulta' })
  @Post()
  async create(@Body() createConsultaDto: CreateConsultaDto) {
    const usuarioId = 1;
    return this.consultaService.create(usuarioId, createConsultaDto);
  }

  @ApiOperation({ summary: 'Listar todas as consultas' })
  @Get()
  async findAll() {
    return this.consultaService.findAll();
  }

  @ApiOperation({ summary: 'Buscar consulta por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.consultaService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Atualizar informações de uma consulta' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateConsultaDto) {
    return this.consultaService.update(Number(id), updateData);
  }

  @ApiOperation({ summary: 'Remover uma consulta' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.consultaService.remove(Number(id));
  }
}
