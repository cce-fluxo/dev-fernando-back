import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Cidade')
@Controller('cidade')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}

  @ApiOperation({ summary: 'Cria uma nova cidade' })
  @Post()
  create(@Body() createCidadeDto: CreateCidadeDto) {
    return this.cidadeService.create(createCidadeDto);
  }

  @ApiOperation({ summary: 'Lista todas as cidades' })
  @Get()
  findAll() {
    return this.cidadeService.findAll();
  }

  @ApiOperation({ summary: 'Busca uma cidade pelo ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cidadeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualiza os dados de uma cidade' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCidadeDto: UpdateCidadeDto) {
    return this.cidadeService.update(+id, updateCidadeDto);
  }

  @ApiOperation({ summary: 'Remove uma cidade pelo ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cidadeService.remove(+id);
  }
}
