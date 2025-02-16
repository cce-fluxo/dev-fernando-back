import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { UpdateProntuarioDto } from './dto/update-prontuario.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Prontuario')
@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @ApiOperation({ summary: 'Criar um novo prontuário' })
  @Post()
  async create(@Body() createProntuarioDto: CreateProntuarioDto) {
    const usuarioId = 1; // Defina como obter o usuarioId (por exemplo, via autenticação)
    return this.prontuarioService.create(usuarioId, createProntuarioDto);
  }

  @ApiOperation({ summary: 'Listar todos os prontuários' })
  @Get()
  async findAll() {
    return this.prontuarioService.findAll();
  }

  @ApiOperation({ summary: 'Buscar prontuário por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prontuarioService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Atualizar informações de um prontuário' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateProntuarioDto) {
    return this.prontuarioService.update(Number(id), updateData);
  }

  @ApiOperation({ summary: 'Remover um prontuário' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prontuarioService.remove(Number(id));
  }
}
