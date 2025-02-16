import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Estado')
@Controller('estado')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @ApiOperation({ summary: 'Cria uma novo estado' })
  @Post()
  create(@Body() createEstadoDto: CreateEstadoDto) {
    return this.estadoService.create(createEstadoDto);
  }

  @ApiOperation({ summary: 'Lista todos os estados do sistema' })
  @Get()
  findAll() {
    return this.estadoService.findAll();
  }

  @ApiOperation({ summary: 'Lista os estados por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoService.findOne(+id);
  }

  @ApiOperation({ summary: 'Edita um estado por ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoDto: UpdateEstadoDto) {
    return this.estadoService.update(+id, updateEstadoDto);
  }

  @ApiOperation({ summary: 'Deleta um estado por ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoService.remove(+id);
  }
}
