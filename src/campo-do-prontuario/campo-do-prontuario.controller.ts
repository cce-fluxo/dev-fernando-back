import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { CampoDoProntuarioService } from './campo-do-prontuario.service';
import { CreateCampoDoProntuarioDto } from './dto/create-campo-do-protuario.dto';
import { UpdateCampoDoProntuarioDto } from './dto/update-campo-do-prontuario.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Campo do Prontuário')
@Controller('campo-do-prontuario')
export class CampoDoProntuarioController {
  constructor(private readonly campoDoProntuarioService: CampoDoProntuarioService) {}

  @ApiOperation({ summary: 'Criar um novo campo do prontuário' })
  @Post()
  async create(@Body() createCampoDoProntuarioDto: CreateCampoDoProntuarioDto) {
    return this.campoDoProntuarioService.create(createCampoDoProntuarioDto);
  }

  @ApiOperation({ summary: 'Listar todos os campos do prontuário' })
  @Get()
  async findAll() {
    return this.campoDoProntuarioService.findAll();
  }

  @ApiOperation({ summary: 'Buscar campo do prontuário por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.campoDoProntuarioService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Atualizar informações de um campo do prontuário' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateCampoDoProntuarioDto) {
    return this.campoDoProntuarioService.update(Number(id), updateData);
  }

  @ApiOperation({ summary: 'Remover um campo do prontuário' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.campoDoProntuarioService.remove(Number(id));
  }
}
