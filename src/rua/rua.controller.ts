import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RuaService } from './rua.service';
import { CreateRuaDto } from './dto/create-rua.dto';
import { UpdateRuaDto } from './dto/update-rua.dto';
import { ApiOperation } from '@nestjs/swagger'; 

@Controller('rua')
export class RuaController {
  constructor(private readonly ruaService: RuaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova rua' })
  create(@Body() createRuaDto: CreateRuaDto) {
    return this.ruaService.create(createRuaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obter todas as ruas' })
  findAll() {
    return this.ruaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma rua pelo ID' })
  findOne(@Param('id') id: string) {
    return this.ruaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma rua pelo ID' })
  update(@Param('id') id: string, @Body() updateRuaDto: UpdateRuaDto) {
    return this.ruaService.update(+id, updateRuaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma rua pelo ID' })
  remove(@Param('id') id: string) {
    return this.ruaService.remove(+id);
  }
}
