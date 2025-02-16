import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Paciente')
@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @ApiOperation({
    summary: 'Rota para criar um novo paciente no sistema',
  })
  @Post()
  async create(@Body() createPacienteDto: CreatePacienteDto) {
  return this.pacienteService.create(createPacienteDto);
}

@ApiOperation({
    summary: 'Listar todos os pacientes no sistema',
  })
  @Get()
  async findAll() {
    return this.pacienteService.findAll();
  }

  @ApiOperation({
    summary: 'Listar um paciente por ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pacienteService.findOne(id);
  }

  @ApiOperation({
    summary: 'Atualiza as informações de um paciente',
  })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(id, updatePacienteDto);
  }

  @ApiOperation({
    summary: 'Remover um paciente',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pacienteService.remove(id);
  }
}
