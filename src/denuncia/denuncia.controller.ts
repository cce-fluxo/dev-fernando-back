import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DenunciaService } from './denuncia.service';
import { CreateDenunciaDto } from './dto/create-denuncia.dto';
import { UpdateDenunciaDto } from './dto/update-denuncia.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Denúncias')
@Controller('denuncia')
export class DenunciaController {
  constructor(private readonly denunciaService: DenunciaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova denúncia' })
  create(@Body() createDenunciaDto: CreateDenunciaDto) {
    return this.denunciaService.create(createDenunciaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as denúncias' })
  findAll() {
    return this.denunciaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma denúncia pelo ID' })
  findOne(@Param('id') id: string) {
    return this.denunciaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma denúncia' })
  update(@Param('id') id: string, @Body() updateDenunciaDto: UpdateDenunciaDto) {
    return this.denunciaService.update(+id, updateDenunciaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma denúncia' })
  remove(@Param('id') id: string) {
    return this.denunciaService.remove(+id);
  }
}
