import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Agenda')
@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @ApiOperation({
    summary: 'Cria uma nova agenda para o médico e clínica',
  })
  @Post()
  create(@Body() createAgendaDto: CreateAgendaDto) {
    return this.agendaService.create(createAgendaDto);
  }

  @ApiOperation({
    summary: 'Recupera todas as agendas cadastradas',
  })
  @Get()
  findAll() {
    return this.agendaService.findAll();
  }

  @ApiOperation({
    summary: 'Recupera uma agenda específica pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agendaService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Atualiza uma agenda existente',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgendaDto: UpdateAgendaDto) {
    return this.agendaService.update(+id, updateAgendaDto);
  }

  @ApiOperation({
    summary: 'Remove uma agenda do sistema',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendaService.remove(+id);
  }
}
