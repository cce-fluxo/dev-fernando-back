import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Mensagem')
@Controller('mensagem')
export class MensagemController {
  constructor(private readonly mensagemService: MensagemService) {}

  @ApiOperation({ summary: 'Criar uma nova mensagem' })
  @Post()
  async create(@Body() createMensagemDto: CreateMensagemDto) {
    return this.mensagemService.create(createMensagemDto);
  }

  @ApiOperation({ summary: 'Listar todas as mensagens' })
  @Get()
  async findAll() {
    return this.mensagemService.findAll();
  }

  @ApiOperation({ summary: 'Buscar mensagem por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.mensagemService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Atualizar mensagem' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMensagemDto: UpdateMensagemDto) {
    return this.mensagemService.update(Number(id), updateMensagemDto);
  }

  @ApiOperation({ summary: 'Remover mensagem' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.mensagemService.remove(Number(id));
  }
}
