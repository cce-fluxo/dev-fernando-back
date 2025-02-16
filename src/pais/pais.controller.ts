import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaisService } from './pais.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('País')
@Controller('pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @ApiOperation({
    summary: 'Rota para criar um novo país no sistema',
  })
  @Post()
  create(@Body() createPaisDto: CreatePaisDto) {
    return this.paisService.create(createPaisDto);
  }

  @ApiOperation({
    summary: 'Listar todos os paises no sistema',
  })
  @Get()
  findAll() {
    return this.paisService.findAll();
  }

  @ApiOperation({
    summary: 'Buscar um país por ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Atualizar as informações de um país',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaisDto: UpdatePaisDto) {
    return this.paisService.update(+id, updatePaisDto);
  }

  @ApiOperation({
    summary: 'Remover um país',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paisService.remove(+id);
  }
}
