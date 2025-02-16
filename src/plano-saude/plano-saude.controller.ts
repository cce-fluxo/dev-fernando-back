import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanoSaudeService } from './plano-saude.service';
import { CreatePlanoSaudeDto } from './dto/create-plano-saude.dto';
import { UpdatePlanoSaudeDto } from './dto/update-plano-saude.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Plano de Saúde')
@Controller('plano-saude')
export class PlanoSaudeController {
  constructor(private readonly planoSaudeService: PlanoSaudeService) {}
  
  @ApiOperation({
    summary: 'Criar um novo plano de saúde',
  })
  @Post()
  create(@Body() createPlanoSaudeDto: CreatePlanoSaudeDto) {
    return this.planoSaudeService.create(createPlanoSaudeDto);
  }

  @ApiOperation({
    summary: 'Listar todos os planos de saúde',
  })
  @Get()
  findAll() {
    return this.planoSaudeService.findAll();
  }

  @ApiOperation({
    summary: 'Buscar um plano de saúde por ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planoSaudeService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Atualizar as informações de um plano de saúde',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanoSaudeDto: UpdatePlanoSaudeDto) {
    return this.planoSaudeService.update(+id, updatePlanoSaudeDto);
  }

  @ApiOperation({
    summary: 'Remover um plano de saúde',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planoSaudeService.remove(+id);
  }
}
