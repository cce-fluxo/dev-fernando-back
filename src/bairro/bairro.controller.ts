import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BairroService } from './bairro.service';
import { CreateBairroDto } from './dto/create-bairro.dto';
import { UpdateBairroDto } from './dto/update-bairro.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('bairro')
@Controller('bairro')
export class BairroController {
  constructor(private readonly bairroService: BairroService) {}

  @ApiOperation({
    summary: 'Cria um novo bairro no sistema',
  })
  @Post()
  create(@Body() createBairroDto: CreateBairroDto) {
    return this.bairroService.create(createBairroDto);
  }

  @ApiOperation({
    summary: 'Retorna todos os bairros cadastrados',
  })
  @Get()
  findAll() {
    return this.bairroService.findAll();
  }

  @ApiOperation({
    summary: 'Retorna um bairro específico pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bairroService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Atualiza um bairro existente',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBairroDto: UpdateBairroDto) {
    return this.bairroService.update(+id, updateBairroDto);
  }

  @ApiOperation({
    summary: 'Remove um bairro do sistema',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bairroService.remove(+id);
  }
}
