import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Clinica')
@Controller('clinica')
export class ClinicaController {
  constructor(private readonly clinicaService: ClinicaService) {}

  @ApiOperation({ summary: 'Cria uma nova clínica' })
  @Post()
  create(@Body() createClinicaDto: CreateClinicaDto) {
    return this.clinicaService.create(createClinicaDto);
  }

  @ApiOperation({ summary: 'Obtém todas as clínicas' })
  @Get()
  findAll() {
    return this.clinicaService.findAll();
  }

  @ApiOperation({ summary: 'Obtém uma clínica específica pelo ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicaService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualiza os dados de uma clínica existente' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClinicaDto: UpdateClinicaDto) {
    return this.clinicaService.update(+id, updateClinicaDto);
  }

  @ApiOperation({ summary: 'Deleta uma clínica específica' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicaService.remove(+id);
  }
}
