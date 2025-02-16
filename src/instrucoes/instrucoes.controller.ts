import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { InstrucoesService } from './instrucoes.service';
import { CreateInstrucoesDto } from './dto/create-instrucoes.dto';
import { UpdateInstrucoesDto } from './dto/update-instrucoes.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Instruções')
@Controller('instrucoes')
export class InstrucoesController {
  constructor(private readonly instrucoesService: InstrucoesService) {}

  @ApiOperation({ summary: 'Criar uma nova instrução' })
  @Post()
  async create(@Body() createInstrucoesDto: CreateInstrucoesDto) {
    const usuarioId = 1; // Defina como obter o usuarioId (por exemplo, via autenticação)
    return this.instrucoesService.create(usuarioId, createInstrucoesDto);
  }

  @ApiOperation({ summary: 'Listar todas as instruções' })
  @Get()
  async findAll() {
    return this.instrucoesService.findAll();
  }

  @ApiOperation({ summary: 'Buscar instrução por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.instrucoesService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Atualizar informações de uma instrução' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: UpdateInstrucoesDto,
  ) {
    return this.instrucoesService.update(Number(id), updateData);
  }

  @ApiOperation({ summary: 'Remover uma instrução' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.instrucoesService.remove(Number(id));
  }
}
