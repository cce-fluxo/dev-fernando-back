import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Avaliações')
@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @ApiOperation({ summary: 'Cria uma nova avaliação' })
  @Post()
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  @ApiOperation({ summary: 'Retorna todas as avaliações' })
  @Get()
  findAll() {
    return this.avaliacaoService.findAll();
  }

  @ApiOperation({ summary: 'Retorna uma avaliação pelo ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualiza uma avaliação pelo ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto) {
    return this.avaliacaoService.update(+id, updateAvaliacaoDto);
  }

  @ApiOperation({ summary: 'Remove uma avaliação pelo ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(+id);
  }
}
