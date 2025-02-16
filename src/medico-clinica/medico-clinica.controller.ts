import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicoClinicaService } from './medico-clinica.service';
import { CreateMedicoClinicaDto } from './dto/create-medico-clinica.dto';
import { UpdateMedicoClinicaDto } from './dto/update-medico-clinica.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Médico-clinica')
@Controller('medico-clinica')
export class MedicoClinicaController {
  constructor(private readonly medicoClinicaService: MedicoClinicaService) {}

  @ApiOperation({
    summary: 'Criar uma nova associação entre médico e clínica',
  })
  @Post()
  create(@Body() createMedicoClinicaDto: CreateMedicoClinicaDto) {
    return this.medicoClinicaService.create(createMedicoClinicaDto);
  }

  @ApiOperation({
    summary: 'Listar todas as associações de médicos com clínicas',
  })
  @Get()
  findAll() {
    return this.medicoClinicaService.findAll();
  }

  @ApiOperation({
    summary: 'Buscar uma associação de médico com clínica por ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicoClinicaService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Atualizar informações de uma associação de médico com clínica',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicoClinicaDto: UpdateMedicoClinicaDto) {
    return this.medicoClinicaService.update(+id, updateMedicoClinicaDto);
  }

  @ApiOperation({
    summary: 'Remover uma associação de médico com clínica',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicoClinicaService.remove(+id);
  }
}
